import Button from "../components/Button";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-detail">
        <h2>CHIMJI.BKK</h2>
        <a>Contact</a>
        <Button name="Subscribe" />
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
}
