import ig from "../assets/images/ig.png"
import fc from "../assets/images/fc.png";
import line from "../assets/images/line.png";
import map from "../assets/images/map.png";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer-detail">
        <div className="footer-vertical">
          <h2 style={{ marginBottom: "5px"}}>CHIMJI.</h2>
          <h2>BKK</h2>
        </div>
        <div className="footer-vertical">
          <a style={{ marginBottom: "30px"}}>Contact</a>
          <p>+1+86 852 346 000</p>
          <p style={{ marginBottom: "20px"}}>info@foodzero.com</p>
          <p>1959 Sepulveda Blvd.</p>
          <p>Culver City, CA, 90230</p>
        </div>
        <img
          className="footer-map"
          src={map}
          alt="map"
        />
      </div> */}
      {/* <div className="footer-border" /> */}
      <div className="footer-bottom">
        <p>© chimji.bkk</p>
        {/* <div className="footer-icon-group">
          <img
            className="footer-icon"
            src={ig}
            alt="instagram"
          />
          <img
            className="footer-icon-facebook"
            src={fc}
            alt="facebook"
          />
          <img
            className="footer-icon"
            src={line}
            alt="line"
          />
        </div> */}
      </div>
    </div>
  );
}
