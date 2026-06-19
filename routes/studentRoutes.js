const express = require('express');
const router = express.Router();
const controller = require('../controller/studentController');
router.post("/add", controller.addEnteries);
router.put("/update/:id", controller.updateEnteries);
router.delete("/delete/:id",controller.deleteEnteries);
module.exports = router;