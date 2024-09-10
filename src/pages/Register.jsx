import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../src/assets/logo.png'
import '../../src/Styles/Login.css'
import CardImg from '../components/CardImg'
import Buttons from '../components/Buttons'

function Register() {
  return (
    <>
      <div className="container-main">
        <CardImg/>
        <div className="container-title">
          <img src={Logo} alt="logo" className='logo'/>
          <h1>Register</h1>
          <h6>Select method to Register:</h6>
          <Buttons/>
          <div className="container-line">
            <div className="line1"></div>
            <h6>or continue with email</h6>
            <div className="line2"></div>
          </div>
          <div className="container-form">
            <input type="text" placeholder='Username' className='input'/>
            <input type="text" placeholder='Gmail or Username' className='input'/>
            <input type="password" placeholder='Password' className='input'/>
            <div className="container-remember">
            </div>
            <Link className='btn-login'>Sing in</Link>
            <Link rel="stylesheet" to='/Login' className='forgot'>You have a account?</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register