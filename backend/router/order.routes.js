// order.routes.js

const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller");

router.get("/", orderController.getAllOrders); // Tüm siparişleri getir
router.get("/:id", orderController.getOrderById); // Belirli bir siparişi getir
router.post("/", orderController.createOrder); // Yeni bir sipariş oluştur
router.put("/:id", orderController.updateOrder); // Belirli bir siparişi güncelle
router.delete("/:id", orderController.deleteOrder); // Belirli bir siparişi sil

module.exports = router;
