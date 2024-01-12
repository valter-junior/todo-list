const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/controllerUser');



router.get("", controllerUser.getAllUsers);

router.delete("/:id", controllerUser.deleteUser);

module.exports = router;