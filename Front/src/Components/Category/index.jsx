import React, { useEffect, useState } from "react";
import "./index.css";
import CategoryCard from "../CategoryCard";
import axios from "axios";
import Navbar from "../Navbar";
import Assistance from "../Assistance";
import { Link } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/src/Components/Data/categorie.json").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-container-category">
        <span className="title-category">
          Seleziona la categoria da te desiderata!
        </span>
        <div className="grid-container-category">
          {categories?.length > 0 &&
            categories.map((c) => (
              <Link to="../library">
                <CategoryCard key={c.id} title={c.title} image={c.image} />
              </Link>
            ))}
        </div>
      </div>
      <Assistance />
    </>
  );
}

export default Category;
