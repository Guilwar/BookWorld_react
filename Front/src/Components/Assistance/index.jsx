import React, { useState } from "react";
import "./index.css";
import axios from "axios";

function Assistance({ email }) {
  const [isAssistanceOpen, setIsAssistanceOpen] = useState(false);
  const [assistanceText, setAssistanceText] = useState("");

  const openAssistance = () => {
    setIsAssistanceOpen(true);
  };

  const closeAssistance = () => {
    setIsAssistanceOpen(false);
  };

  function openPopup() {
    setIsAssistanceOpen(true);
  }

  function closePopup() {
    setIsAssistanceOpen(false);
  }

  function sendRequest() {
    if (assistanceText.length === 0) return;

    alert("Richiesta inviata");
    setIsAssistanceOpen(false);
  }

  return (
    <>
      <button className="assistance-button-assistance" onClick={openPopup}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </button>
      {isAssistanceOpen && (
        <div className="open-background-popup">
          <div className="open-assistance-popup">
            <div className="title-assistance-popup">
              <div className="title-assistance">Area assistenza</div>
              <button className="close-popup-assistance" onClick={closePopup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="container-form-assistance">
              <textarea
                className="textarea-assistance"
                placeholder="Inserisci di seguito il problema da risolvere"
                onChange={(e) => setAssistanceText(e.target.value)}
                value={assistanceText}
              ></textarea>
              <button
                className="confirm-assistance-button"
                onClick={sendRequest}
              >
                Invia richiesta
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Assistance;
