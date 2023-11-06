const router = require("express").Router();
const { getData } = require("../../controllers/technology"); 

router.get("/technology", getData);

module.exports = router;