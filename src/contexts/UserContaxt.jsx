import { createContext } from "react";
import axios from "../config/axios";
import { useState } from "react";

export const UserContext = createContext();

export default function UserContaxtProvider({ children }) {
  //! setCartItem
  const [cartItem, setCartItem] = useState([]);
  const [checkUpdateCart, setCheckUpdateCart] = useState(false);
  const [] = useState([]);

  const getCart = async (id) => {
    const res = await axios.get(`/user/getCart/${id}`);
    setCartItem(res.data.cart);
  };

  const addToCart = (orderDetail) => {
    console.log(orderDetail);
    return axios.post("/user/cart", orderDetail);
  };

  const deleteCart = async (id) => {
    return await axios.delete(`/user/deleteCart/${id}`);
  };

  //! inc & desc Quantity
  const incQuantity = async (id) => {
    console.log(id);
    await axios.post(`/user/incQuantity/${id}`);
    setCheckUpdateCart(true);
  };
  const descQuantity = async (id) => {
    console.log(id);
    await axios.post(`/user/descQuantity/${id}`);
    setCheckUpdateCart(true);
  };

  // const checkOrders = async () => {
  //   const res = await axios.get("user/orders");
  //   return res;
  // };

  return (
    <UserContext.Provider
      value={{
        getCart,
        addToCart,
        deleteCart,
        cartItem,
        setCartItem,
        incQuantity,
        descQuantity,
        checkUpdateCart,
        setCheckUpdateCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
