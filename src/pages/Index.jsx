import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Index.css";
import Nav from "../components/Nav/Nav";

function Index() {
  return (
    <>
      <Nav />
      <section className="section-index">
        <div className="overlay">
          <h1 className="main-text">
            Encuentra a alguien que no solo complemente tus sueños, sino que
            también los impulse a volar juntos.
          </h1>
        </div>
        <Link to="/login" className="btn-ingre">
            <span>Ingresa</span>
          </Link>
      </section>
      
    </>
  );
}

export default Index;
