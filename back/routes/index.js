const router = require("express").Router();

router.use('/user', require('./user'));  
router.use('/favourite', require("./favourite"))

module.exports = router;



