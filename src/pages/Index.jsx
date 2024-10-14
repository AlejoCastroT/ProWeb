import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Index.css';
import Nav from '../components/Nav/Nav';
import HoverEffect from "../components/HoverEffect"; 


function Index() {
  return (
    <>
      <Nav />
      <section className='section-index'>
        <div className='main'>
          Encuentra a alguien que no solo complemente tus sueños, sino que también los impulse a volar juntos.
        </div>
        <HoverEffect />
          <div className='arrow-container'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <Link to='/login' className='btn-ingre'>Ingresa</Link>

      </section>
    </>
  );
}

export default Index;
