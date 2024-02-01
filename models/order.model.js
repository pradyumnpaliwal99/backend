const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  date: {
    type: Date,
  },
  productName: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
