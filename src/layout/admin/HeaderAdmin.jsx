import React from "react";
import Navbar from "../Navbar";
import useAuth from "../../hooks/use-auth";

export default function HeaderAdmin() {
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
          {/* <Navbar title="Home" href="" /> */}
          <Navbar title="Menu" href="menuAdmin" />
          <Navbar title="Management" href="management" />
          <Navbar
            title={authUser ? "Logout" : "Login"}
            href="/login"
            onClick={logout}
          />
        </div>
      </div>
    </header>
  );
}
