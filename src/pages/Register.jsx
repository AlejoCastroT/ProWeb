import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo.png";
import "../../src/Styles/Login.css";
import CardImg from "../components/CardImg";

function Register() {
  return (
    <>
      <div className="container-main">
        <CardImg />
        <div className="container-title">
          <img src={Logo} alt="logo" className="logo" />
          <h1>Register your account</h1>
          <h6>Continue with your registration:</h6>
          <div className="container-form">
            <input type="text" placeholder="Username" className="input" />
            <input type="text" placeholder="Gmail" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <div className="container-remember"></div>
            <Link className="btn-login">Sing in</Link>
            <Link rel="stylesheet" to="/Login" className="forgot">
              You have a account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
