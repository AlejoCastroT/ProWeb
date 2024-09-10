import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../src/assets/logo.png'
import '../../src/Styles/Login.css'
import CardImg from '../components/CardImg'
import Buttons from '../components/Buttons'

function Login() {
  return (
    <>
      <div className="container-main">
        <CardImg/>
        <div className="container-title">
          <img src={Logo} alt="logo" className='logo'/>
          <h1>Log in to your Account</h1>
          <h6>Select method to log in:</h6>
          <Buttons/>
          <div className="container-line">
            <div className="line1"></div>
            <h6>or continue with email</h6>
            <div className="line2"></div>
          </div>
          <div className="container-form">
            <input type="text" placeholder='Gmail or Username' className='input'/>
            <input type="password" placeholder='Password' className='input'/>
            <div className="container-remember">
            <label className='remember' >
              <input type="checkbox" className="remember-me" name="remember-me"/>
                Recuérdame
            </label>
              <Link rel="stylesheet" href="" className='forgot'>Forgot your password?</Link>
            </div>
            <Link className='btn-login'>Log in</Link>
            <Link rel="stylesheet" to='/register' className='forgot'>Don’t have account? Create an account</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login