const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/controllerUser');

router.post("", controllerUser.createUser);

module.exports = router