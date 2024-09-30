import React, { useState } from 'react';
import '../Styles/Main.css';

const data = [
  {
    id: 1,
    name: 'Ana',
    age: 25,
    image: 'https://via.placeholder.com/500x600.png?text=Ana',
  },
  {
    id: 2,
    name: 'Luis',
    age: 30,
    image: 'https://via.placeholder.com/500x600.png?text=Luis',
  },
  {
    id: 3,
    name: 'Marta',
    age: 28,
    image: 'https://via.placeholder.com/500x600.png?text=Marta',
  },
];

function Main() {
  const [cards, setCards] = useState(data);

  const handleSwipe = (id, direction) => {
    setCards(cards.filter(card => card.id !== id));
    console.log(`Tarjeta deslizada a la ${direction} con id: ${id}`);
  };

  return (
    <div className="main-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="card"
          style={{ zIndex: cards.length - index }}
        >
          <img src={card.image} alt={card.name} className="card-image" />
          <div className="card-info">
            <h2>{card.name}, {card.age}</h2>
          </div>
          <div className="buttons">
            <button onClick={() => handleSwipe(card.id, 'left')} className="dislike-btn">❌</button>
            <button onClick={() => handleSwipe(card.id, 'right')} className="like-btn">❤️</button>
          </div>
        </div>
      ))}
      {cards.length === 0 && <div>No hay más tarjetas</div>}
    </div>
  );
}

export default Main;
