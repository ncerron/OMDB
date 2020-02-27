const router = require("express").Router();

router.use('/', require('./user'));  
router.use('/', require("./favourite"))

module.exports = router;



