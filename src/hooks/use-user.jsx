import { useContext } from "react";
import { UserContext } from "../contexts/UserContaxt";

export default function useUser() {
  return useContext(UserContext);
}
