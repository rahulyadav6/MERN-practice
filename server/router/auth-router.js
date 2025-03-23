const express = require('express');
const authControllers = require('../controllers/auth-controller');

const router = express.Router();

router.get('/', authControllers.home);

router.get('/register', authControllers.register);

module.exports = router;