const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportConf = require('../../passport');


const { validateBody, schemas } = require('../../helpers/routeHelpers');
const UserController = require('../../controllers/users');

const passportSignIn = passport.authenticate('local', { session: false });
const passportJwt = passport.authenticate('jwt', { session: false })


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "OK"
    })
})

router.post('/signup', validateBody(schemas.authSchema), (req, res, next) => {
    UserController.signUp(req, res, next);
})

router.post('/signin', validateBody(schemas.authSchema), passportSignIn, (req, res, next) => {
    UserController.signIn(req, res, next);
})

router.post('/signout', (req, res, next) => {
    res.send("sign out")
})

router.get('/secret',passportJwt, (req, res, next) => {

    UserController.secret(req, res, next);
    // res.status(200).send("ok")
})


module.exports = router;