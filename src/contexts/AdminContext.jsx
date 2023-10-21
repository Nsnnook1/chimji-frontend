import { createContext, useState } from "react";
import axios from "../config/axios";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const addMenu = async (menuDetail) => {
    const res = await axios.post("/admin/add", menuDetail);
  };

  const getAllMenu = async () => {
    const res = await axios.get("/admin/menu");
    return res
  };

  const checkOrders = async () => {
    const res = await axios.get("/admin/orders");
    return res
  };

  return (
    <AdminContext.Provider value={{ addMenu, getAllMenu, checkOrders }}>
      {children}
    </AdminContext.Provider>
  );
}
