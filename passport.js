const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcryptjs');


const { token_key } = require('./config/keys');
const pool = require('./db/db');


// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), // from where the token is coming
    secretOrKey: token_key   // how to decode the token
}, async (payload, done) => {
    try {

        // find the user specified in token_key
        const sql = 'SELECT id FROM users WHERE id=?';
        pool.query(sql, [payload.sub], (err, rows) => {// payload.sub is the userid from jwt
            if (rows.length === 0) {
                return done(null, false); // if users does not exists
            }
            console.log('--inside passport user query', rows);
            done(null, rows) // if the user exists
        })
    }catch(error) {
        done(error, false);
    }

}));

// LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'user',
}, async (user, password, done) => {

        try {
            const sql = 'SELECT id, userName, pass FROM users WHERE userName= ?';

            pool.query(sql, [user], async (err, rows, fields) => {
                if (err) throw new Error(err);

                if (rows.length > 0) {
                    let { pass } = rows[0]
                    const match = await bcrypt.compare(password, pass); // pass -- hashPass
                    if (!match) {
                        return done(null, false);
                    }
                    if(match) {
                        console.log("inside passport", rows[0]);
                        return done(null, rows[0]);
                    }
                } else { // if the user does not exist
                        return done(null, false, { message: `user ${ user } does not exist` });
                    }

            })

        }catch(err){
            done(err, false)
        }

    }

));

