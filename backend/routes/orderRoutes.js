const express = require("express");
const router = express.Router();

const { getOrders, newOrder } = require("../controllers/orderController");
const { authMiddleware } = require("../middleware");

router.get("/allOrders", authMiddleware, getOrders);
router.post("/newOrder", authMiddleware, newOrder);

module.exports = router;