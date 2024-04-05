import React from "react";
import "./index.css";
import BackGround from "../Background";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <BackGround />
      <div className="popup-register" id="register_popup">
        <div className="popup">
          <div className="popup-navbar">
            <p className="title-navbar">Registrati</p>
          </div>
          <div className="popup-elements">
            <br />
            <input
              type="text"
              name="name"
              placeholder="Inserire nome"
              className="insertion-box"
              required
            />
            <br />
            <input
              type="text"
              name="sex"
              placeholder="Inserire email"
              className="insertion-box"
            />
            <br />
            <input
              type="text"
              name="password1"
              placeholder="Inserisci password"
              className="insertion-box"
            />
            <br />
            <input
              type="text"
              name="password2"
              placeholder="Re-inserisci password"
              className="insertion-box"
            />
            <br /> <br />
            <button type="submit" className="registration-button">
              Registrati
            </button>
            <br />
            <br />
            <span className="bottom-text-register" id="to_login">
              Sei già registrato?{" "}
              <Link to={"/login"} className="bottom-text-link-register">
                Torna alla login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
