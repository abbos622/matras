const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/statistics");
const { validateStatistics } = require("../../middlewares/validate");
const { checkToken } = require("../../middlewares/checkToken");

router.get("/statistics", checkToken, getData);
// router.post("/statistics", validateStatistics, insertData);
router.put("/statistics", checkToken, validateStatistics, updateData);
// router.patch("/statistics", deleteData);

module.exports = router;