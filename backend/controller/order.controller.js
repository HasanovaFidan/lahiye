// orderController.js

const Order = require("../models/order.models");

const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find({});
      res.send(orders);
    } catch (error) {
      res.status(500).send("Error fetching orders");
    }
  },

  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findById(id);
      if (!order) {
        return res.status(404).send("Order not found");
      }
      res.send(order);
    } catch (error) {
      res.status(500).send("Error fetching order");
    }
  },

  createOrder: async (req, res) => {
    try {
      const { items } = req.body;
      const newOrder = new Order({ items });
      await newOrder.save();
      res.status(201).send(newOrder);
    } catch (error) {
      res.status(500).send("Error creating order");
    }
  },

  updateOrder: async (req, res) => {
    try {
      const { id } = req.params;
      const { items } = req.body;
      const updatedOrder = await Order.findByIdAndUpdate(id, { items }, { new: true });
      res.send(updatedOrder);
    } catch (error) {
      res.status(500).send("Error updating order");
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedOrder = await Order.findByIdAndDelete(id);
      if (!deletedOrder) {
        return res.status(404).send("Order not found");
      }
      res.send(deletedOrder);
    } catch (error) {
      res.status(500).send("Error deleting order");
    }
  },
};

module.exports = orderController;
