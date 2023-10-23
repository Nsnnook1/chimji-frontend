import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import useAuth from "../../hooks/use-auth";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [input, setInput] = useState({ email: "", password: "" });

  const { login } = useAuth(); //custom hooks : call fn login via authContext.
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch((err) => {
      toast.error(err.response.data.msg);
    });
  };
  return (
    <header className="login-wrapper">
      <h1>Login</h1>
      <h4>Please Login or add an account.</h4>

      <form className="inputform" onSubmit={handleSubmitForm}>
        <InputForm
          placeholder="Email address"
          label="Email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <InputForm
          placeholder="Password"
          type="password"
          label="Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />

        <div className="button-login">
          <Button name="CONFIRM" />
          <Link to="/register">
            <Button name="REGISTER"  />
          </Link>
        </div>
      </form>
    </header>
  );
}
