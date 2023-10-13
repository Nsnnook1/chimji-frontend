import { createContext, useState } from "react";
import { addAccessToken, removeAccessToken } from "../utils/local-storage";
import axios from "../config/axios";

export const AuthContext = createContext(); //provider children for someone

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  //   const [initialLoading, setInitialLoading] = useState(true);

  //   useEffect(() => {
  //     if (Token()) {
  //       axios
  //         .get("/auth/checkAuthUser") //check token หมดอายุละยัง
  //         .then((res) => {
  //           setAuthUser(res.data.user); //ดึงข้อมูลของuser มาจาก data อีกที
  //         })
  //         // .finally(() => {
  //         //   setInitialLoading(false);
  //         // });
  //     } else {
  //       setInitialLoading(false);
  //     }
  //   }, []);

  const register = async (registerObject) => {
    const res = await axios.post("auth/register", registerObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const login = async (identity) => {
    console.log('identity', identity)
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
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
