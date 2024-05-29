import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "../Navbar";
import axios from "axios";
import LibraryCard from "../LibraryCard";
import Assistance from "../Assistance";

function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.post("http://localhost:3000/book/").then((res) => {
      setBooks(res.data.bookList);
      setFilteredBooks(res.data.bookList);
    });
  }, []);

  const handleSearchChange = (e) => {
    console.log(books);
    console.log(e.target.value);
    const newFilteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        book.author.toLowerCase().includes(e.target.value.toLowerCase()) ||
        book.age.toString().includes(e.target.value)
    );
    console.log(newFilteredBooks);
    setFilteredBooks(newFilteredBooks);
  };

  // useEffect(() => {
  //   axios.get("/src/Components/Data/libri.json").then((res) => {
  //     setBooks(res.data);
  //   });
  // }, []);

  // const register = async () => {
  //   const response = await axios.post("http://localhost:3000/user/register", {
  //     username: name,
  //     email,
  //     password,
  //   });

  //   alert("Registrato con successo");

  //   navigator("/login");
  // };

  return (
    <>
      <Navbar />
      <div className="page-container-search">
        <span className="title-search">Cerca il libro da te desiderato</span>
        <form className="container-form" action="#">
          {/* <select name="attibuti" className="search-attribute-search">
            <option value="select">Seleziona l'attributo da ricercare</option>
            <option value="titolo">Titolo</option>
            <option value="eta">Eta'</option>
            <option value="autore">Autore</option>
          </select> */}
          <input
            type="text"
            onChange={handleSearchChange}
            className="textarea-attribute-search"
            placeholder="Inserisci i parametri di ricerca del libro "
          ></input>
          {/* <input
            className="research-button-search"
            type="submit"
            value="re-search"
          /> */}
        </form>
        <div className="container-book">
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
      </div>
      <Assistance />
    </>
  );
}

export default Search;
