import { createContext, useState, useEffect } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import axios from "../config/axios";

export const AuthContext = createContext(); //provider children for someone

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/checkAuthUser") //check token หมดอายุละยัง
        .then((res) => {
          setAuthUser(res.data.user); //ดึงข้อมูลของuser มาจาก data อีกที
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      // return true;
      setInitialLoading(false);
    }
  }, []);

  const register = async (registerObject) => {
    registerObject.role = "user";
    const res = await axios.post("/auth/register", registerObject);

    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const registerAdmin = async (registerObject) => {
    registerObject.role = "admin";
    const res = await axios.post("/auth/checkAuthUser", registerObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const login = async (identity) => {
    const res = await axios.post("auth/login", identity);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login,
        register,
        registerAdmin,
        logout,
        initialLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
