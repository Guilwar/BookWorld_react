import React, { useState, useEffect } from "react";
import "./index.css";
import BackGround from "../Background";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const navigator = useNavigate();

  const messageRegister = () => {
    alert("Non tutti i campi sono stati compilati");
  };

  const handleNameChangeRegister = (e) => {
    setName(e.target.value);
    checkButtonStatusRegister(e.target.value, email, password, confirmPassword);
  };

  const handleEmailChangeRegister = (e) => {
    setEmail(e.target.value);
    checkButtonStatusRegister(name, e.target.value, password, confirmPassword);
  };

  const handlePasswordChangeRegister = (e) => {
    setPassword(e.target.value);
    checkButtonStatusRegister(name, email, e.target.value, confirmPassword);
  };

  const handlePasswordConfirmChangeRegister = (e) => {
    setConfirmPassword(e.target.value);
    checkButtonStatusRegister(name, email, password, e.target.value);
  };

  const register = async () => {
    const response = await axios.post("http://localhost:3000/user/register", {
      username: name,
      email,
      password,
    });

    alert("Registrato con successo");

    navigator("/login");
  };

  const checkButtonStatusRegister = (
    name,
    email,
    password,
    confirmPassword
  ) => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  const OpenGif = () => {
    const gif = document.querySelector(".activeGif");
    gif.style.display = "block";
  };

  return (
    <>
      <BackGround />

      {/* <div className="activeGif"></div> */}

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
              onChange={(e) => handleNameChangeRegister(e)}
              className="insertion-box"
              required
            />
            <br />
            <input
              type="text"
              name="sex"
              placeholder="Inserire email"
              onChange={(e) => handleEmailChangeRegister(e)}
              className="insertion-box"
              required
            />
            <br />
            <input
              type="text"
              name="password1"
              placeholder="Inserisci password"
              onChange={(e) => handlePasswordChangeRegister(e)}
              className="insertion-box"
              required
            />
            <br />
            <input
              type="text"
              name="password2"
              placeholder="Re-inserisci password"
              onChange={(e) => handlePasswordConfirmChangeRegister(e)}
              className="insertion-box"
              required
            />
            <br /> <br />
            {isButtonEnabled ? (
              <button
                className="registration-button"
                onClick={() => {
                  if (password === confirmPassword) register();
                  else
                    alert(
                      "La password deve corrispondere al campo di conferma della password"
                    );
                }}
              >
                <span className="text_btn_register">SIGN IN</span>
              </button>
            ) : (
              <button
                className="registration-button-fake"
                onClick={messageRegister}
              >
                <span className="text_btn_register">SIGN IN</span>
              </button>
            )}
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
