// import { useRef } from "react";

import Navbar from "./Navbar";
import useAuth from "../hooks/use-auth";
import "../styles/navbar.scss";

export default function Header() {
  // const scrollToRef = useRef(null);
  const { logout, authUser } = useAuth();

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
          <Navbar title={authUser ? "Logout" : "Login" } href="/login" onClick={logout}/>
        </div>
      </div>
    </header>
  );
}
