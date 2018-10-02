const JWT = require('jsonwebtoken');
const pool = require('../db/db');

const _hash = require('../utils/hashPass');

const { token_key } = require('../config/keys');

const signToken = userId => {

                return JWT.sign({
                          iss: 'killerwhale_we_rock',
                          sub:  userId,
                          iat: new Date().getTime(),
                          exp: new Date().setDate(new Date().getDate() * 1) // one day ahead
                        }, token_key);
        }


module.exports = {

    signUp: async (req, res, next) => {
        try {

            const {user, password } = req.value.body;
            // check if user exist
            let sql = "SELECT * FROM users WHERE userName= ? || pass= ?";

            await pool.query(sql, [user, password], (err, rows, fields) => {
                    if (err) throw new Error(err);
                // if user and pass does not match
                if (rows.length === 0) {

                    _hash(password).then(pass => {

                        sql = "INSERT INTO users (userName, pass) VALUES (?, ?)";
                        pool.query(sql, [user, pass], (err, rows, fields) => {
                                if (err) throw new Error(err);
                                let { insertId } = rows;
                                //create token
                                const token = signToken(insertId);

                                res.status(201).json({message: "record inserted", insertId, token});
                                })
                        })
                }else {
                    res.status(403).json({message: "user allready exists"});
                }
            })

        }catch(err) {
            next(err);
        }
    },

    signIn: async (req, res, next) => {
        try {
            // GENERATE THE TOKEN
            const { user: {id, userName}} = req
            const token = signToken(id)
            console.log("Successfully signin")

            res.status(200).json({message: "signed in!",
                                  user: userName,
                                  token })
        }catch(err) {
            next(err)
        }
    },

    secret: async (req, res, next) => {
        try {
            console.log("INSIDE SECRET CONTROLLER AFTER PASSPORT AUTH");
            res.json({secret: "resource"});
        }catch(err) {
            next(err)
        }
    },
}
