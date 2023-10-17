import chimji from "../assets/images/chimji.jpg";
import LoginForm from "../features/auth/LoginForm";
import "../styles/login.scss";

export default function LoginPage() {
  return (
    <div className="login">
      <img src={chimji} alt="logo" className="logo" />
      <LoginForm/>
    </div>
  );
}
