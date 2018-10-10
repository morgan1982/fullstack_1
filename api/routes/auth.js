const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportConf = require('../../passport');

const { validateBody, schemas } = require('../../helpers/routeHelpers');
const UserController = require('../../controllers/users');


// const passportSignIn = passport.authenticate('local', { session: false })
const passportJwt = passport.authenticate('jwt', { session: false });



router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "true"
    })
})

router.post('/signup', validateBody(schemas.authSchema), (req, res, next) => {
    UserController.signUp(req, res, next);
    // res.status(200).json({ message: 'SignUp ok' });
})

router.post('/signin', validateBody(schemas.authSchema), (req, res, next) => {
	passport.authenticate('local', { session: false }, (err, user, info) => {
		if (err) throw new Error({message: 'db error' });
		if (user) {
			// console.log("inside the route", user);
			// res.status(200).send('ok');
			UserController.signIn(user, res, next);
		}else {
			res.json({ message: info.message });
		}

	})(req, res, next)
})

router.post('/signout', (req, res, next) => {
    res.send("sign out")
})

router.get('/secret', passportJwt, (req, res, next) => {

  UserController.secret(req, res, next);
    // res.status(200).send("ok")
})

router.post('/signUpTest', validateBody(schemas.authSchema), (req, res, next) => {

    setTimeout(() => {
      console.log('inside the signup testing route', req.body);
      res.status('200').json({ message: 'ok' });
  }, 2000);

})




module.exports = router;
