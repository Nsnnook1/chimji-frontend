import Button from "../components/Button";
import RegisterForm from "../features/auth/Registerform";
import "../styles/register.scss";

export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
      <div className="register-button">
        <div>
          <Button name="REGISTER"/>
        </div>
      </div>
    </div>
  );
}
