import React from "react";
import "./index.css";
import Navbar from "../Navbar";

function Shop() {
  return (
    <>
      <Navbar />
      <div className="page-container-shop">
        <span className="title-shop">Libri nel carrello</span>
      </div>

      <div className="button-buy">
        <button className="buy-shop">Acquista</button>
      </div>
    </>
  );
}

export default Shop;
