import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { GeneralContext } from "./GeneralContext";
import { watchList } from "../data/data";

import "./BuyActionWindow.css";

export default function BuyActionWindow({ uid }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    const stock = watchList.find((s) => s.name === uid);

    if (!stock) return;

    const marketPrice = Number(stock.price);
    const userPrice = Number(stockPrice);

    axios.post(
      `${import.meta.env.VITE_API_URL}/newOrder`,
      {
        name: uid,
        qty: stockQuantity,
        price: userPrice > marketPrice ? marketPrice : userPrice,
        mode: "BUY",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    closeBuyWindow();
    window.location.reload();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
