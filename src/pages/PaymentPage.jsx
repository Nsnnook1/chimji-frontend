import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/use-user";
import payment from "../assets/images/payment.jpg";
import Button from "../components/Button";
import InputForm from "../components/InputForm";

import "../styles/payment.scss";

export default function PaymentPage() {
  const { createOrders } = useUser();

  const [picture, setPicture] = useState(null);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("picture", picture);
    createOrders(formData);
  };

  return (
    <div className="payment-wrapper-card">
      <div className="payment-header">
        <h1>Payment</h1>
      </div>
      <div className="payment-wrapper">
        <img className="payment-qrcode" src={payment} alt="QRCode" />
      </div>
      <div className="payment-wrapper">
        <InputForm
          type="file"
          label="Add slip in here"
          onChange={(e) => {
            setPicture(e.target.files[0]);
          }}
        />
      </div>
      <div className="payment-button">
        <Link to="/menu">
          <Button name="Confirm" onClick={handleSubmit} />
        </Link>
      </div>
    </div>
  );
}
