const router = require("express").Router();
const { insertData } = require("../../controllers/contact");
const { validateContact } = require("../../middlewares/validate");

router.post("/contact", validateContact, insertData);

module.exports = router;