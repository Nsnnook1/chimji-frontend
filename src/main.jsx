import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import AdminContextProvider from "./contexts/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
  </AuthContextProvider>
);
