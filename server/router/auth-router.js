const express = require('express');
const authControllers = require('../controllers/auth-controller');
const {signUpSchema, loginSchema} = require("../validators/auth-validator")
const validate = require('../middlewares/validate-middleware');

const router = express.Router();

router.get('/', authControllers.home);

router.post('/register', validate(signUpSchema), authControllers.register);

router.post('/login',validate(loginSchema), authControllers.login);

module.exports = router;