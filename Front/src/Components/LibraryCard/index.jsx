import React, { useState } from "react";
import "./index.css";

function LibraryCard({ title, image, age, description }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const OpenDescription = () => {
    setIsDescriptionOpen(true);
  };

  const CloseDescription = () => {
    setIsDescriptionOpen(false);
  };

  function openShopPopup() {
    alert("Libro aggiunto al carrello");
  }
  return (
    <>
      <div className="grid-element-library-card">
        <div className="card-title-library-card">{title}</div>
        {!isDescriptionOpen && (
          <div className="container-image-library-card">
            <img
              className="image-library-card"
              src={image}
              onClick={OpenDescription}
            ></img>
          </div>
        )}
        {isDescriptionOpen && (
          <div className="description-librarycard" onClick={CloseDescription}>
            {description}
          </div>
        )}
        <div className="bottom-card-library-card">
          <div className="required-age-library-card">
            Età consigliata: {age}
          </div>
          <button className="acquista-library-card" onClick={openShopPopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div className="information-popup">Metti nel carrello</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default LibraryCard;
