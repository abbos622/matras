const router = require("express").Router();
const { getData } = require("../../controllers/products"); 

router.get("/products", getData); 

module.exports = router;