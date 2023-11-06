const router = require("express").Router();
const { loginAdmin } = require("../../controllers/login");
const { validateLogin } = require("../../middlewares/validate");

router.post("/login", validateLogin, loginAdmin);

module.exports = router;