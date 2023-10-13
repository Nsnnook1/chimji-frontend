import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
// import Authenticated from "../features/auth/Authenticated";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
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
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
