const express = require("express");
const {
  addProduct,
  getAllProduct,
  updateAProduct,
  getProductById,
  deleteProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.route("/addProduct").post(addProduct);
router.route("/getAllProduct").get(getAllProduct);
router.route("/updateAProduct/:id").post(updateAProduct);
router.route("/getProductById/:id").get(getProductById);
router.route("/deleteProduct/:id").get(deleteProduct);
module.exports = router;
