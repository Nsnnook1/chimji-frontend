import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

//custom hook
export default function useAuth() {
  return useContext(AuthContext);
}
