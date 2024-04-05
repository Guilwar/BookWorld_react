import React, { useEffect, useState } from "react";
import "./index.css";
import Navbar from "../Navbar";
import LibraryCard from "../LibraryCard";
import axios from "axios";
import Assistance from "../Assistance";

function Library() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("/src/Components/Data/libri.json").then((res) => {
      setBooks(res.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="page-container-library">
        <span className="title-library">
          Seleziona la categoria da te desiderata!
        </span>
        <div />

        {/* CategoryCard */}
        <div className="grid-container-library">
          {books?.length > 0 &&
            books.map((c) => (
              <LibraryCard
                key={c.id}
                title={c.title}
                image={c.image}
                age={c.age}
                description={c.description}
              />
            ))}
        </div>
      </div>
      <Assistance />
    </>
  );
}

export default Library;
