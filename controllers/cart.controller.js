const CartModel = require("../models/cart.model");
exports.addToCart = async (req, res) => {
  console.log(req.body);
  const {
    id,
    name,
    category,
    image,
    new_price,
    old_price,
    quantity,
    size,
    color,
  } = req.body;

  if (!id || !name || !category || !quantity) {
    res.status(400).json({ error: "fill the details" });
  } else {
    try {
      const finalCart = new CartModel({
        id: id,
        name: name,
        category: category,
        image: image,
        new_price: new_price,
        old_price: old_price,
        quantity: quantity,
        size: size,
        color: color,
      });

      const storedata = await finalCart.save();
      res.status(201).json(storedata);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
exports.deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await CartModel.deleteOne({ id: id });
    res.status(201).json({ message: "cart deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
