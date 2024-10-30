import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Index.css";
import Nav from "../components/Nav/Nav";
import LoveImage from "../assets/Love.png"; // Importa la imagen

function Index() {
  return (
    <>
      <Nav />
      <section
        className="section-index"
        style={{ backgroundImage: `url(${LoveImage})` }}
      >
        <div className="overlay">
          <h1 className="main-text">
            Encuentra a alguien que no solo complemente tus sueños, sino que
            también los impulse a volar juntos.
          </h1>
          <Link to="/login" className="btn-ingre">
            Ingresa
          </Link>
        </div>

        <div className="grid-container">
          <div className="grid-item" style={{ backgroundColor: "#f28b82" }}>
            Contenido 1
          </div>
          <div className="grid-item" style={{ backgroundColor: "#fbbc04" }}>
            Contenido 2
          </div>
          <div className="grid-item" style={{ backgroundColor: "#34a853" }}>
            Contenido 3
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
