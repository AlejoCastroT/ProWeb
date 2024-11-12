import React, { useState } from "react";
import "../Styles/Main.css";
import Sidebar from "../components/Sidebar/Sidebar";

const data = [
  {
    id: 1,
    name: "Ana",
    age: 25,
    image: "https://via.placeholder.com/500x600.png?text=Ana",
  },
  {
    id: 2,
    name: "Luis",
    age: 30,
    image: "https://via.placeholder.com/500x600.png?text=Luis",
  },
  {
    id: 3,
    name: "Marta",
    age: 28,
    image: "https://via.placeholder.com/500x600.png?text=Marta",
  },
];

function Main() {
  const [cards, setCards] = useState(data); // Todos los datos de las tarjetas
  const [cardIndex, setCardIndex] = useState(0); // Índice de la tarjeta actual visible

  const handleSwipe = (direction) => {
    // Mueve al siguiente índice, si no hay más tarjetas, reinicia
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(0); // Si llegamos al final, reiniciamos las tarjetas
    }
    console.log(`Tarjeta deslizada a la ${direction}`);
  };

  return (
    <section className="main-container">
      <Sidebar />
      <div className="card-container">
        {cards.length > 0 && (
          <div className="card">
            <img className="card-image" src={cards[cardIndex].image} alt={cards[cardIndex].name} />
            <div className="card-info">
              <h2>{cards[cardIndex].name}, {cards[cardIndex].age}</h2>
            </div>
            <div className="swipe-buttons">
              <button
                className="swipe-left"
                onClick={() => handleSwipe("izquierda")}
              >
                ❌
              </button>
              <button
                className="swipe-right"
                onClick={() => handleSwipe("derecha")}
              >
                ❤️
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Main;
