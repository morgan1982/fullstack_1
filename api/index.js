const connection = require('../db/db.js');



function errorHandler (err, res) {

       if (err) {
           console.log(`that's an error ${err}`);
           res.sendStatus(500);
           return
       }
}


module.exports = app => {


    app.get('/api', (req, res) => {
        res.send("root");

    })

    // INSERT POST
    app.post('/create_post', (req, res) => {

        console.log("creating post...");
        const title = req.body.title;
        const content = req.body.content;

        const queryString = "INSERT INTO posts (title, content) VALUES (?, ?)"
        connection.query(queryString, [title, content], (err, rows, fileds) => {

            errorHandler(err, res);

            console.log(`record added..\n title: ${title} content: ${content}`);
            res.end();
        })

    })
    // UPDATE POST
    app.post('/updatepost', (req, res) => {
        const newTitle = req.body.title;
        const body = req.body.content;
        const postId = req.body.id;

        // how to update only the title or content?
        let sql = `UPDATE posts SET title= '${newTitle}' WHERE id = '${postId}'`;
        connection.query(sql, (err, rows, fields) => {

            errorHandler(err, res);
            console.log('updated');

            res.end();
        })
    })

    // GET POST
    app.get("/api/posts/:id", (req, res) => {

        let pathname = req._parsedUrl.pathname;
        console.log("--pathname-- " + pathname); // use it for the delete post route!

        const postId = req.params.id;
        const queryString = "SELECT * FROM customers WHERE id = ?";

        connection.query(queryString, [postId], (err, rows, fields) => {

            errorHandler(err, res);

            // MAP RECORDDS
            const post = rows.map((row) => {
                return {
                    firstName: row.firstName,
                    lastName: row.lastName
                }
            })

            res.json(post);
        })
    })


    // GET POSTS
    app.get('/api/posts', (req, res) => {

        connection.query('SELECT * FROM customers', (err, rows, fields) => {

            errorHandler(err, res);

            console.log('connected successfully..');
            res.json(rows);

                    })
    })
}
