const router = require("express").Router();
const { getData } = require("../../controllers/address");
 
router.get("/address", getData);

module.exports = router;