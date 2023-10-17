import { useRef } from 'react';
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import "../styles/navbar.scss";

export default function Header() {
  const scrollToRef = useRef(null);

  return (
    <header>
      <div className="navbar">
        <div className="navbar-left">
          <div>
            Chimji<span className="sublogo"></span>
          </div>
        </div>

        <div className="navbar-right">
          <Navbar title="Home" href="" />
          <Navbar title="Menu" href="/menu" />
          <Navbar title="Contact" />
          <Navbar title="Login" href="/login" />
        </div>
      </div>
    </header>
  );
}
