const express = require("express");
const { addToCart, deleteCart } = require("../controllers/cart.controller");
const router = express.Router();

router.route("/addToCart").post(addToCart);
router.route("/deleteCart/:id").delete(deleteCart);

module.exports = router;
