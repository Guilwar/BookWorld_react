import React, { useState } from "react";
import "./index.css";
import BackGround from "../Background";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [canLogin, setCanLogin] = useState(false);
  const navigator = useNavigate();
  const message = () => {
    alert("Errore");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkButtonStatus(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkButtonStatus(e.target.value, email);
  };

  const checkButtonStatus = (email, password) => {
    if (email.length > 0 && password.length > 0) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  const login = async () => {
    const response = await axios.get("http//localhost:3000/user/login", {
      username: email,
      password,
    });
    alert("Login successful");
    navigator("/home");
  };

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
              onChange={(e) => handleEmailChange(e)}
              className="insertion-box"
              autoComplete="off"
            />
            <br />
            <br />

            <input
              type="text"
              name="password"
              placeholder="Inserire password"
              onChange={(e) => handlePasswordChange(e)}
              className="insertion-box"
              autoComplete="off"
            />

            <br />
            <br />
            {isButtonEnabled ? (
              <button
                type="submit"
                className="registration-button-real-login"
                onClick={() => {
                  login();
                }}
              >
                <span>Accedi</span>
              </button>
            ) : (
              <button
                className="registration-button-fake-login"
                onClick={message}
              >
                <span className="">Accedi</span>
              </button>
            )}

            {/* <button type="submit" className="registration-button">
              Accedi
            </button> */}
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
