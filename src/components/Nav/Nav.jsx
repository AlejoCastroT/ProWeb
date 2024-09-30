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
      <div className={'but'}>
        <Link to='/login' className='btn-log'>Log in</Link>
        <Link to='/register' className='btn-reg'>Register</Link>
      </div>
    </div>
  );
}

export default Nav;
