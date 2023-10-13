import Navbar from "./Navbar";
import "../styles/navbar.scss";

export default function Header() {
  return (
    <header>
      <div className="navbar">
          <div className="navbar-left">
            <div className="logo"><img src="" alt="logo" /></div>
            {/* <h1>CHIMJI</h1> */}
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
