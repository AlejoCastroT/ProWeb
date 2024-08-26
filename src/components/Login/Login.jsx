import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import Logo from '../../assets/logo.png'
import '../../Styles/Login.css'

function Login() {
  return (
    <>
      <div className="container-main">
        <div className="container-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="container-form">
          <img src={Logo} alt="logo" />
          <h1>Log in to your Account</h1>
          <h6>Select method to log in:</h6>
          <div className="buttons">
            <button className='btn-goo'>
              <FcGoogle className="icon" /> Google
            </button>
            <button className='btn-face'>
              <FaFacebook className="icon" style={{ color: '#3b5998' }} /> Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
