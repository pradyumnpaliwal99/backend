const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Start the server
const port = process.env.PORT || 5000;
app.get("/", (req, res, next) => {
  console.log("base re");
  return res.json(200);
});

const URL = `mongodb+srv://pradyumnpaliwalvit:pradyumnvit@pradyumn.pdkboc0.mongodb.net/`;
try {
  mongoose.connect(URL);
  console.log("Database Connected Succesfully");
} catch (error) {
  console.log("Error: ", error.message);
}

const userSchema = require("./models/user.model");
const cartSchema = require("./models/cart.model");
const productSchema = require("./models/product.model");

const userRouter = require("./routes/user.route");
const cartRouter = require("./routes/cart.route");
const productRouter = require("./routes/product.route");

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
