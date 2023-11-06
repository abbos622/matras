const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/technology");
const { validateTechnology } = require("../../middlewares/validate");
const { checkToken } = require("../../middlewares/checkToken");

router.get("/technology", checkToken, getData);
router.post("/technology", checkToken, validateTechnology, insertData);
router.put("/technology/:id", checkToken, validateTechnology, updateData);
router.delete("/technology/:id", checkToken, deleteData);

module.exports = router;