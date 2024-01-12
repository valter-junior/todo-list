const express = require('express');
const router = express.Router();
const controllerTask = require('../controllers/controllerTask')


router.post("", controllerTask.createTask);
router.get("", controllerTask.getAllTasks);



module.exports = router;