import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../src/assets/logo.png';
import '../../src/Styles/Login.css';
import CardImg from '../components/CardImg';
import Swal from 'sweetalert2'; 

function Login() {
  const [email, setEmail] = useState(''); // Cambio 'setIEmail' a 'setEmail'
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = { email, password };

    // Realiza la solicitud al servidor aquí
    fetch('http://localhost:5000/api/login', {
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
        throw new Error('Login failed');
      })
      .then((data) => {
        console.log('Login successful:', data);

        // Guardamos el username y el token en localStorage
        localStorage.setItem('username', data.user.username); // Guardamos el nombre de usuario
        localStorage.setItem('token', data.token); // Guardamos el token de acceso

        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: '¡Has iniciado sesión correctamente!',
        });

        navigate('/main'); // Redirige a la página principal
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al iniciar sesión. Verifica tus credenciales.',
        });
      });
  };

  return (
    <>
      <div className="container-main">
        <CardImg />
        <div className="container-title">
          <img src={Logo} alt="logo" className="logo" />
          <h1>Log in to your Account</h1>
          <h6>Continue with email:</h6>
          <form className="container-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Gmail"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el email correctamente
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="container-remember">
              <label className="remember">
                <input type="checkbox" className="remember-me" name="remember-me" />
                Remember me
              </label>
              <Link className="forgot">Forgot your password?</Link>
            </div>
            <button type="submit" className="btn-login">Log in</button>
            <Link to="/register" className="forgot">Don’t have an account? Create an account</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
