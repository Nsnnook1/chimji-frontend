import { createContext } from "react";
import { useState } from "react";
import axios from "../config/axios";

export const UserContext = createContext();

export default function UserContaxtProvider({ children }) {
  //! setCartItem
  const [cartItem, setCartItem] = useState([]);
  const [checkUpdateCart, setCheckUpdateCart] = useState(false);

  const getCart = async () => {
    const res = await axios.get(`/user/getCart`);
    setCartItem(res.data.cart);
  };

  const createOrders = (body) => {
    return axios.post(`/user/createOrders`, body);
  };

  const addToCart = (orderDetail) => {
    return axios.post("/user/cart", orderDetail);
  };

  const deleteCart = async (id) => {
    await axios.delete(`/user/deleteCart/${id}`);
    setCheckUpdateCart(true);
  };

  //! inc & desc Quantity
  const incQuantity = async (id) => {
    await axios.post(`/user/incQuantity/${id}`);
    setCheckUpdateCart(true);
  };
  const descQuantity = async (id) => {
    await axios.post(`/user/descQuantity/${id}`);
    setCheckUpdateCart(true);
  };

  return (
    <UserContext.Provider
      value={{
        getCart,
        createOrders,
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
