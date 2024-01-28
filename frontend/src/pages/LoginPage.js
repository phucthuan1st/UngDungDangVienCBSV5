import { useState,  React } from "react";
import "../styles/LoginPage.css";
import LoginForm from "../components/LoginForm";

const LoginPage = ()  => {
    return (
        <div className="LoginPage">
            <div className="logo">
                <img src="https://en.hcmus.edu.vn/wp-content/uploads/2022/07/Logo-01.png" alt="HCMUS"/>
            </div>
            <LoginForm />
        </div>
    );
};

export default LoginPage;