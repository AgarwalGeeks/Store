const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/authenticate');

router.post('/signup', signup);

module.exports = router;
