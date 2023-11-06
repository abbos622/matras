const router = require("express").Router();
const { getData, updateData, searchData } = require("../../controllers/orders");
const { checkToken } = require("../../middlewares/checkToken");

router.get("/orders/:page", checkToken, getData);
router.patch("/orders/:id", checkToken, updateData);
router.get("/search/orders", checkToken, searchData);

module.exports = router;