import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className="container-title">
          <img src={Logo} alt="logo" className='logo'/>
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
          <div className="container-line">
            <div className="line1"></div>
            <h6>or continue with email</h6>
            <div className="line2"></div>
          </div>
          <div className="container-form">
            <input type="text" placeholder='Gmail or Username' className='gmail'/>
            <input type="password" placeholder='Password' className='pass'/>
            <div className="container-remember">
            <label className='remember' >
              <input type="checkbox" className="remember-me" name="remember-me"/>
                Recuérdame
            </label>
              <Link rel="stylesheet" href="" className='forgot'>Forgot your password?</Link>
            </div>
            <Link className='btn-login'>Sing in</Link>
            <Link rel="stylesheet" href="" className='forgot'>Don’t have account? Create an account</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
