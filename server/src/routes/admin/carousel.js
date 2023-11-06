const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/carousel");
const fileUpload= require("../../lib/multer");
const { validateCarousel } = require("../../middlewares/validate");
const { checkToken } = require("../../middlewares/checkToken");

router.get("/carousel", checkToken, getData);
router.post("/carousel", checkToken, fileUpload("carousel").single("image"), validateCarousel, insertData);
router.put("/carousel/:id", checkToken, fileUpload("carousel").single("image"), validateCarousel, updateData);
router.delete("/carousel/:id", checkToken, deleteData);

module.exports = router;