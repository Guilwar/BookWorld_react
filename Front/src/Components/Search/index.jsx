import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "../Navbar";
import axios from "axios";
import LibraryCard from "../LibraryCard";

function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [books, setBooks] = useState([]);

  const OpenSearch = () => {
    setIsSearchOpen(true);
  };

  useEffect(() => {
    axios.get("/src/Components/Data/libri.json").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-container-search">
        <span className="title-search">Cerca il libro da te desiderato</span>
        <form className="container-form" action="#">
          <select name="attibuti" className="search-attribute-search">
            <option value="select">Seleziona l'attributo da ricercare</option>
            <option value="titolo">Titolo</option>
            <option value="eta">Eta'</option>
            <option value="autore">Autore</option>
          </select>
          <textarea
            className="textarea-attribute-search"
            placeholder="Inserisci i parametri di ricerca del libro "
          ></textarea>
          <input
            className="research-button-search"
            type="submit"
            value="re-search"
          />
        </form>
        <div className="container-book">
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
      </div>
    </>
  );
}

export default Search;
