import React from 'react';
import welcome from '../assets/Welcome.jpg';
import Badge from './Badge'; 


function CardImg() {
  return (
    <div className="container-text" style={{ position: 'relative' }}>
      {}
      <img
        src="https://source.unsplash.com/random/1000x1000"
        alt="Welcome"
        style={{ width: '100%', borderRadius: '10px' }} 
      />
      <Badge text="Welcome" /> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default CardImg;
