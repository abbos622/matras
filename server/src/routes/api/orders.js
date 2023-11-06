const router = require("express").Router();
const { insertData } = require("../../controllers/orders");
const { validateOrders } = require("../../middlewares/validate");

router.post("/orders", validateOrders, insertData);

module.exports = router;