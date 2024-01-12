const express = require('express');
const router = express.Router();
const controllerMaster = require('../controllers/controllerMaster')

router.post("", controllerMaster.loginMaster)

module.exports = router
