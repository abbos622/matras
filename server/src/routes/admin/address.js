const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/address");
const fileUpload = require("../../lib/multer");
const { validateAddress } = require("../../middlewares/validate");
const { checkToken } = require("../../middlewares/checkToken");
 
router.get("/address", checkToken, getData);
router.post("/address", checkToken, fileUpload("address").array("images", 4), validateAddress, insertData);
router.put("/address/:id", checkToken, fileUpload("address").array("images", 4), validateAddress, updateData);
router.delete("/address/:id", checkToken, deleteData);

module.exports = router;