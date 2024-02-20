// order.models.js

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tecnik' }], // Assuming items are Tecnik IDs
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
