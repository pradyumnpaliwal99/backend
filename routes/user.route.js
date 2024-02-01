const express = require("express");
const {
  login,
  register,
  //  logout
} = require("../controllers/user.controller");
const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
// router.route("/logout").post(logout);

module.exports = router;
