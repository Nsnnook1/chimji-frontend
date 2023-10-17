import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const currentPage = location.pathname;
  if (currentPage === "/register" || currentPage === "/login") {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  } else
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );

  // return (
  // <>
  //   <Header />
  //   <Outlet />
  //   <Footer />
  //   {/* outlet เปลี่ยนตาม path ทีื่ต้องการ */}
  // </>
  // );
}
