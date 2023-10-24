import React from "react";
import CartTable from "../features/user/CartTable";
import Button from "../components/Button";
import "../styles/order.scss";
import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <div className="order-wrapper-card">
      <div className="order-wrapper">
        <div className="order-header">
          <h1 className="order-name">Cart Detail</h1>
        </div>
      </div>
      <div className="order-body">
        <CartTable />
      </div>
      <br />
      <div className="order-button">
        <Link to="/payment">
          <Button className="button-add" name="Confirm" />
        </Link>
      </div>
    </div>
  );
}
