import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartTable from "../features/user/CartTable";
import Button from "../components/Button";
import useAuth from "../hooks/use-auth";
import useUser from "../hooks/use-user";
import "../styles/order.scss";

export default function OrderPage() {
  const { authUser } = useAuth();
  const { getCart, checkUpdateCart, setCheckUpdateCart, cartItem } = useUser();

  let sum = 0;
  cartItem.map((x) => (sum += x.quantity * x.price));

  useEffect(() => {
    getCart();
    setCheckUpdateCart(false);
  }, [checkUpdateCart]);

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
      <div className="total-price">
        <p>Total : {sum}</p>
      </div>
      <div className="order-button">
        <Link to="/payment" state={{ sum }}>
          <Button className="button-add" name="Confirm" />
        </Link>
      </div>
    </div>
  );
}
