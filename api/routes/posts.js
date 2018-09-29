const _ = require('lodash');
const express = require('express');
const router = express.Router();
const pool = require('../../db/db');



// GET POSTS
router.get('/test', (req, res, next) => {



    const sql = 'SELECT body.paragraph, images.url from posts inner join body on body.post_id = posts.id inner join images on images.post_id = posts.id';


    pool.query(sql, (err, rows, fields) => {
        if (err) throw new Error;

        res.status(200).json({

            data: rows
        })
    })
})

router.get('/', (req, res, next) => {

    const domain = 'localhost:3000';
    const path = `hhtp://${domain}/api/`

     const sql = "SELECT * FROM posts";

     pool.query(sql, (err, rows, fields) => {

            let PostsCount = null;
            if(rows) {
                PostsCount = rows.length;
            }

            if (err) throw new Error(err);

             res.status(200).json({
                    message: 'list of posts',
                    numOfPosts: PostsCount,
                    meta: rows.map(row => {
                        return {
                            id: row.id,
                            path: path + row.id,
                            title: row.title,
                            body: row.body,
                            date: row.post_time
                        }
                    })
                })
         })



})

// CREATE POST
router.post('/', async (req, res, next) => {



    const post = {
        title: req.body.title,
        body: req.body.body,
        images: ["image1_url", "image2_url"] // need an array of images from the client
        // images_url: req.body.imageUrls
    }

    let sql_1 = "INSERT INTO posts (title, body) VALUES (?, ?)";
    let valArr = [post.title, post.body];

    let sql_2 = "INSERT INTO images (post_id, url) VALUES (?, ?)";



    function creator (sql, valArr) {


            return new Promise((resolve, reject) => {

                let resObj = null;

                pool.query(sql, valArr, (err, rows, fields) => {

                                if (err) {
                                    reject(err)
                                } else {
                                     resObj = {
                                        data: { count: rows.length, records: rows }
                                     }

                                     resolve(resObj)
                                    }
                            }
                        );

                })

     }

    const postData = await creator(sql_1, valArr);
    let id = postData.data.records.insertId // fetches the id from the response

    if (post.images.length > 0) {
        post.images.map((image) => {
            let imageArr  = []
            imageArr.push(id, image)
            creator(sql_2, imageArr);
        })
    }

    res.status(201).json({id});




});


// GET POST
router.get('/:id', (req, res, next) => {

    const id = req.params.id;

    sql = "SELECT * FROM posts WHERE id = ?";

    pool.query(sql, [id], (err, rows, fields) => {

        console.log(rows);
         if (rows.length > 0) {
            res.status(200).json({
                message: `post with id: ${id} fetched..`,
                post: rows[0]
            })
         } else {
            res.status(404).json({message: "invalid id"})
         }


    })
})

router.post('/:id', (req, res, next) => {

    const id = req.params.id;

    res.status(201).json({
        message: 'post the post request handler',
        id
    })
})
// UPDATE POST
router.patch('/:id', (req, res, next) => {

    const id = req.params.id;

    const updateObj = {};
    for (const body of req.body) {
        updateObj[body.propName] = body.value
    }

     if(_.isEmpty(updateObj) !== true) {

         const sql = "UPDATE posts SET ? WHERE id = ?";
         pool.query(sql, [updateObj, id], (err, rows, fields) => {
            if (err) throw new Error(err);
            res.status(200).json(updateObj);
         } )
     }



})

// DELETE POST
router.delete('/:id', (req, res, next) => { // use bodyparser to fetch the id from the client
    // thus the detete should point to the posts path and the id will be given to the sql string

    const id = req.params.id;

    sql = `DELETE FROM posts WHERE id = ?`

    pool.query(sql, [id], (err, rows, fields) => {

        console.log(rows.affectedRows);
        if (rows.affectedRows !== 0) {
            res.status(200).json({
                message: `post with id: ${id} deleted..`,
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/api',
                    body: { title: 'String', body: 'String(Max 500 chars)' }
                }
            });
        } else {
            res.status(404).json("id does not exist");
        }
    })

})


module.exports = router;
