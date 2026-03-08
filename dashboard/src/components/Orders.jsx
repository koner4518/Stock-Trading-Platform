import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css";

export default function Orders(){
  const [orders, setOrders] = useState([]);

  useEffect(()=> {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allOrders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) =>{
        setOrders(res.data);
      })
  }, []);

  if(orders.length == 0){
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="orders-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td>{o.name}</td>
              <td>{o.qty}</td>
              <td>{o.price}</td>
              <td
                style={{
                  color: o.mode === "BUY" ? "#2db36b" : "#df514c"
                }}
              >
                {o.mode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}