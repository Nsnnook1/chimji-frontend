import Navbar from "./Navbar";
// import logoNav from '../assets/images/logoNav.jpg'
import "../styles/navbar.scss";

export default function Header() {
  return (
    <header>
      <div className="navbar">
          <div className="navbar-left">
            <div>Chimji<span className="sublogo"></span></div>
          </div>

          <div className="navbar-right">
            <Navbar title="Home" href="" />
            <Navbar title="Menu" href="/menu" />
            <Navbar title="Contact" href="" />
            <Navbar title="Login" href="login" />
          </div>
      </div>
    </header>
  );
}
