const express = require("express");
const { placeOrder } = require("../controllers/order.cotroller");
const router = express.Router();

router.route("/order").post(placeOrder);

module.exports = router;
