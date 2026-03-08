const express = require("express");
const router = express.Router();

const { getHoldings, getPositions } = require("../controllers/portfolioController");
const { authMiddleware } = require("../middleware");

router.get("/allHoldings", authMiddleware, getHoldings);
router.get("/allPositions", authMiddleware, getPositions);

module.exports = router;