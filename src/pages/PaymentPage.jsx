import { Link } from "react-router-dom";
import payment from "../assets/images/payment.jpg";
import Button from "../components/Button";
import InputForm from "../components/InputForm";

import "../styles/payment.scss";

export default function PaymentPage() {
  return (
    <div className="payment-wrapper-card">
      <div className="payment-header">
        <h1 className="payment-name">Payment</h1>
      </div>
      <div className="payment-wrapper">
        <img className="payment-qrcode" src={payment} alt="QRCode" />
      </div>
      <div className="payment-wrapper">
        <InputForm
          type="file"
          label="Add slip in here"
          // value={input.picture}
          onChange={(e) => {
            setInput({ ...input, picture: e.target.files[0] });
          }}
        />
      </div>
      <div className="payment-button">
        <Link to="/menu">
          <Button name="Confirm" />
        </Link>
      </div>
    </div>
  );
}
