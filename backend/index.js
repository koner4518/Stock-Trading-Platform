require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/", authRoutes);
app.use("/", portfolioRoutes);
app.use("/", orderRoutes);

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
