import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

function Buttons() {
  return (
    <div className="buttons">
    <button className='btn-goo'>
      <FcGoogle className="icon" /> Google
    </button>
    <button className='btn-face'>
      <FaFacebook className="icon" style={{ color: '#3b5998' }} /> Facebook
    </button>
  </div>
  )
}
export default Buttons;