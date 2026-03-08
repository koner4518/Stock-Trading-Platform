const { OrdersModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");

exports.getOrders = async (req, res) => {

  const orders = await OrdersModel.find().sort({ _id: -1 });
  res.json(orders);

};

exports.newOrder = async (req, res) => {

  const { name, qty, price, mode } = req.body;

  try {

    const order = await OrdersModel.create({
      name,
      qty,
      price,
      mode
    });

    const holding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {

      if (holding) {

        const totalQty = holding.qty + Number(qty);

        const totalCost =
          holding.qty * holding.avg + Number(qty) * Number(price);

        holding.qty = totalQty;

        holding.avg = totalCost / totalQty;

        await holding.save();

      } else {

        await HoldingsModel.create({
          name,
          qty,
          avg: price,
          price
        });

      }

    }

    if (mode === "SELL") {

      if (!holding) {
        return res.status(400).json({ message: "No holdings to sell" });
      }

      holding.qty -= Number(qty);

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }

    }

    res.json({ message: "Order executed successfully" });

  } catch (err) {

    res.status(500).json({ message: "Order failed" });

  }

};