import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import RedirectIfAuthenticatedAdmin from "../features/admin/RedirectIfAuthenticatedAdmin";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import useAuth from "../hooks/use-auth";
import Layout from "../layout/Layout";

import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MenuAdmin from "../pages/admin/MenuAdmin";
import ManagementPage from "../pages/admin/ManagementAdmin";
import LayoutAdmin from "../layout/admin/LayoutAdmin";

export default function Route() {
  const { authUser } = useAuth();

  const userChilds = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "/menu", element: <MenuPage /> },
        {
          path: "/login",
          element: (
            <RedirectIfAuthenticated>
              <LoginPage />
            </RedirectIfAuthenticated>
          ),
        },
        { path: "/register", element: <RegisterPage /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  const adminChilds = [
    {
      path: "/admin",
      element: <LayoutAdmin />,
      children: [
        { path: "", element: <MenuAdmin /> },
        { path: "management", element: <ManagementPage /> },
        {
          path: "login",
          element: (
            <RedirectIfAuthenticatedAdmin>
              <LoginPage />
            </RedirectIfAuthenticatedAdmin>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/admin" />,
    },
  ];

  const selectedChild = authUser?.role === "admin" ? adminChilds : userChilds;

  const router = createBrowserRouter(
    selectedChild
  );

  return <RouterProvider router={router} />;
}

//1.ลืมส่งinitialLoading ออกจากคอนเท็นออกไปสู่โลกภายนอกลืมมมมมม!!!!!!
//2.อิมพอท คอมโพเน้นมาใช้เลยบัค
//3.ลืมเรียกใช้ฟังชั่นที่ getAccessToken() อย่าลืม()เวลาเรียกใช้ฟังชั่น!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// by P'Boyyyyy
