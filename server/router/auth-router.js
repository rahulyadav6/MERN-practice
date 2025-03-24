const express = require('express');
const authControllers = require('../controllers/auth-controller');
const signUpSchema = require("../validators/auth-validator")
const validate = require('../middlewares/validate-middleware');

const router = express.Router();

router.get('/', authControllers.home);

router.post('/register', validate(signUpSchema), authControllers.register);

router.post('/login', authControllers.login);

module.exports = router;