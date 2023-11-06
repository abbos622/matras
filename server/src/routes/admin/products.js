const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/products");
const fileUpload = require("../../lib/multer");
const { validateProducts } = require("../../middlewares/validate");
const { checkToken } = require("../../middlewares/checkToken");

router.get("/products", checkToken, getData);
router.post("/products/:id", checkToken, fileUpload("products").array("images", 12), validateProducts, insertData);
router.put("/products/:id", checkToken, fileUpload("products").array("images", 12), validateProducts, updateData);
router.delete("/products/:id", checkToken, deleteData);

module.exports = router;