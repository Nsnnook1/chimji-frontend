import { createContext } from "react";
import axios from "../config/axios";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const addMenu = (menuDetail) => {
    return axios.post("/admin/add", menuDetail);
  };

  const addToCart = (orderDetail) => {
    return axios.post("/user/cart", orderDetail);
  };

  const getAllMenu = async () => {
    const res = await axios.get("/admin/menu");
    return res;
  };

  const checkOrders = async () => {
    const res = await axios.get("/admin/orders");
    return res;
  };

  const editMenu = async (body, id) => {
    return await axios.put(`/admin/editMenu/${id}`, body);
  };

  const deleteMenu = async (id) => {
    return await axios.delete(`/admin/deleteMenu/${id}`);
  };

  return (
    <AdminContext.Provider
      value={{
        addMenu,
        getAllMenu,
        checkOrders,
        editMenu,
        deleteMenu,
        addToCart,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
