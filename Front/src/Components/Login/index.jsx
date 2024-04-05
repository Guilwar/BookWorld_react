import React from "react";
import "./index.css";
import BackGround from "../Background";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <BackGround />
      <div className="popup-login" id="login_popup">
        <div className="popup">
          <div className="popup-navbar">
            <span>Esegui l'accesso</span>
          </div>
          <div className="popup-elements">
            <input
              type="text"
              name="email"
              placeholder="Inserire email"
              className="insertion-box"
              autoComplete="off"
            />
            <br />
            <br />

            <input
              type="text"
              name="password"
              placeholder="Inserire password"
              className="insertion-box"
              autoComplete="off"
            />
            <br />
            <br />
            <button type="submit" className="registration-button">
              Accedi
            </button>
            <br />
            <br />

            <span className="bottom-text-login">
              Non hai un account?{" "}
              <Link to={"/register"} className="bottom-text-link-login">
                Registrati
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
