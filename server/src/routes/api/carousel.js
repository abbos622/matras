const router = require("express").Router();
const { getData } = require("../../controllers/carousel");

router.get("/carousel", getData);

module.exports = router;
