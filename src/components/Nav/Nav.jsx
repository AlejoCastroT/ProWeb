import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import '../../Styles/Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav'>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link className='link' to="/">Inicio</Link></li>
        <li><Link className='link' to="/about">Sobre</Link></li>
        <li><Link className='link' to="/contact">Contacto</Link></li>
      </ul>
      <div className={'but'}>
        <Link to='/login' className='btn-log'>Log in</Link>
        <Link to='/register' className='btn-reg'>Register</Link>
      </div>
      <button className='menu-toggle' onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}

export default Nav;
