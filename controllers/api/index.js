const router = require('express').Router();

// const apiRoutes = require('./api');
const signUp = require('./signup');

router.use('/signup', signUp);

module.exports = router