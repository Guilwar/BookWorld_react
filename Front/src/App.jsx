import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BackGround from "./Components/Background";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Library from "./Components/Library";
import Category from "./Components/Category";
import Search from "./Components/Search";
import Shop from "./Components/Shop";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="library" element={<Library />} />
          <Route path="shop" element={<Shop />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
