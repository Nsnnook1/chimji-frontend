import { Navigate } from "react-router-dom";
import useAuth  from "../../hooks/use-auth";
export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  if (authUser) {
    return <Navigate to="/admin" />;
  }
  return children;
}

// เช็คว่ามีค่า user มั้ย ถ้ามีไปที่หน้า home ถ้าไม่มีไป childrean
