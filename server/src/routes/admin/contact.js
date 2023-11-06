const router = require("express").Router();
const { getData, contactedData, deleteData, searchData } = require("../../controllers/contact");
const { checkToken } = require("../../middlewares/checkToken");

router.get("/contact/:page", checkToken, getData);
router.delete("/contact/:id", checkToken, deleteData);
router.patch("/contacted/:id", checkToken, contactedData);
router.get("/search/contact", checkToken, searchData);

module.exports = router;
