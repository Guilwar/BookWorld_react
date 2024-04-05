import React from "react";
import "./index.css";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="page-container-home">
        {/* Descrizione */}
        <div className="container-description-home">
          <div className="description-title-home"></div>
          <span className="description-subtitle-home">
            La libreria dei tuoi sogni
          </span>
          <span className="description-text-home">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            blanditiis accusantium laudantium? Exercitationem quaerat est
            excepturi. Accusantium facere consequatur aliquam quis dolorem
            voluptatibus ex, molestias, recusandae doloribus harum
            exercitationem beatae.
          </span>
        </div>
        {/* Immagine */}
        <div className="image-container-home"></div>
      </div>
    </>
  );
}

export default Home;
