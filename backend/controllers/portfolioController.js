const { HoldingsModel } = require("../model/HoldingsModel");
const { OrdersModel } = require("../model/OrdersModel");

exports.getHoldings = async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.json(holdings);
};

exports.getPositions = async (req, res) => {
  const orders = await OrdersModel.find();
  const map = {};

  for (let o of orders) {
    if (!map[o.name]) {
      map[o.name] = {
        name: o.name,
        qty: 0,
        totalBuyValue: 0,
        totalBuyQty: 0,
      };
    }

    if (o.mode === "BUY") {
      map[o.name].qty += o.qty;
      map[o.name].totalBuyValue += o.price * o.qty;
      map[o.name].totalBuyQty += o.qty;
    } else {
      map[o.name].qty -= o.qty;
    }
  }

  const positions = [];

  for (let key in map) {
    const p = map[key];

    if (p.qty !== 0) {
      const avg = p.totalBuyQty === 0 ? 0 : p.totalBuyValue / p.totalBuyQty;
      const ltp = avg + (Math.random() * 20 - 10); // fake market price
      const pnl = (ltp - avg) * p.qty;
      const change = ((ltp - avg) / avg) * 100;

      positions.push({
        product: "CNC",
        name: p.name,
        qty: p.qty,
        avg: avg,
        price: ltp,
        pnl: pnl,
        day: change.toFixed(2) + "%",
        isLoss: pnl < 0,
      });
    }
  }

  res.json(positions);
};
