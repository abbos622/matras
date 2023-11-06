const router = require("express").Router();
const { getData } = require("../../controllers/statistics");

router.get("/statistics", getData);

module.exports = router;