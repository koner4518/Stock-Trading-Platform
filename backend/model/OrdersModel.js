const {model} = require("mongoose");

const {OrdersSchema} = require("../schema/OrderSchema");

const OrdersModel = new model("order", OrdersSchema);
module.exports = {OrdersModel};