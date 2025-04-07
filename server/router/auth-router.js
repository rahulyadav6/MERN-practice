const express = require('express');
const authControllers = require('../controllers/auth-controller');
const {signUpSchema, loginSchema} = require("../validators/auth-validator")
const validate = require('../middlewares/validate-middleware');
const authMiddleware = require("../middlewares/auth-Middleware");

const router = express.Router();

router.get('/', authControllers.home);

router.post('/register', validate(signUpSchema), authControllers.register);

router.post('/login',validate(loginSchema), authControllers.login);

router.get('/user',authMiddleware, authControllers.user);

module.exports = router;