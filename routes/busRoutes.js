const express =  require('express');
const router =  express.Router();
const controller =  require('../controller/busController');
router.post("/",controller.addEnteries);
router.get("/available/:seats",controller.getEnteries);
module.exports = router;
