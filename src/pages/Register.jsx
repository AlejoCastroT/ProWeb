import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../src/assets/logo.png';
import '../../src/Styles/Login.css';
import CardImg from '../components/CardImg';
import Swal from 'sweetalert2'; 

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); 

    const userData = { username, email, password };


    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Convierte a JSON si la respuesta es correcta
        }
        throw new Error('Registration failed'); 
      })
      .then((data) => {
        console.log('Registration successful:', data);
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Has registrado tu cuenta con éxito!',
        });
        navigate('/Login'); 
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al registrar. Por favor, intenta nuevamente.', 
        });
      });
  };

  return (
    <>
      <div className="container-main">
        <CardImg />
        <div className="container-title">
          <img src={Logo} alt="logo" className='logo' />
          <h1>Register your account</h1>
          <h6>Continue with your registration:</h6>
          <form className="container-form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder='Username'
              className='input'
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <input
              type="email"
              placeholder='Gmail'
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Password'
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className='btn-login'>Register</button>
            <Link to='/login' className='forgot'>You have an account?</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
