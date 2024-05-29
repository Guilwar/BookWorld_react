import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./index.css";
import Navbar from "../Navbar";
import LibraryCard from "../LibraryCard";
import axios from "axios";
import Assistance from "../Assistance";

function Library() {
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("categoryId"));

  let categoryId = searchParams.get("categoryId")
    ? parseInt(searchParams.get("categoryId"))
    : null;
  console.log(books);
  let filteredBooks = books.filter((b) => b.categoryId === categoryId);

  console.log(filteredBooks);

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
          Sfoglia la nostra galleria di libri!
        </span>
        <div />
        {/* CategoryCard */}
        <div className="grid-container-library">
          {filteredBooks?.length > 0 &&
            filteredBooks.map((c) => (
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
