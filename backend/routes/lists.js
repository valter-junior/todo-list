const express = require('express');
const router = express.Router();
const controllerList = require('../controllers/controllerList');


router.post("", controllerList.createList);

router.get("", controllerList.getAllLists);

router.put("/:id", controllerList.updateLists);

router.delete("/:id", controllerList.deleteLists); 

module.exports = router;
