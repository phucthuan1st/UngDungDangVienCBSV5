import { React } from "react";
import "../styles/LoginPage.css";
import LoginForm from "../components/LoginForm";
import Logo from "../images/Logo.png";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="logo">
        <img src={Logo} alt="HCMUS" />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
