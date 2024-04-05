import React from "react";
import "./index.css";

function CategoryCard({ title, image }) {
  return (
    <>
      <div className="grid-element-category-card">
        <div className="card-title-category-card">{title}</div>
        <a>
          <img className="image-category-card" src={image} />
        </a>
      </div>
    </>
  );
}

export default CategoryCard;
