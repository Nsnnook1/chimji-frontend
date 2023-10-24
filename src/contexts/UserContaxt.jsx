import { createContext } from "react";
import axios from "../config/axios";

export const UserContext = createContext();

export default function UserContaxtProvider({ children }) {
  const getCart = () => {
    return axios.get("/user/getCart")
  }
  
  const addToCart = (orderDetail) => {
    return axios.post("/user/cart", orderDetail);
  };

  const deleteCart = async (id) => {
    return await axios.delete(`/user/deleteCart/${id}`);
   
  }

  // const checkOrders = async () => {
  //   const res = await axios.get("user/orders");
  //   return res;
  // };

  return (
    <UserContext.Provider
      value={{
        getCart,
        addToCart,
        deleteCart
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
