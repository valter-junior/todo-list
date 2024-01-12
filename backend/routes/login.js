const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/controllerLogin');

router.post("", controllerLogin.loginUser);

module.exports = router