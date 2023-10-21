import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <div>
      <HeaderAdmin />
      <Outlet/>
    </div>
  );
}
