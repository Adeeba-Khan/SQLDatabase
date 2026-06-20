const express =  require('express');
const router =  express.Router();
const controller = require("../controller/userController");
router.post("/",controller.addEnteries);
router.get("/",controller.getEnteries);




module.exports = router;