const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/category");
const { validateCategory } = require("../../middlewares/validate");
const { checkToken } = require("../../middlewares/checkToken");

router.get("/categories", checkToken, getData);
router.post("/categories", checkToken, validateCategory, insertData);
router.put("/categories/:id", checkToken, validateCategory, updateData);
router.delete("/categories/:id", checkToken, deleteData);

module.exports = router;