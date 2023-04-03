/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [Mode, setMode] = useState("");
  const toggleMode = () => {
    if (Mode === "") {
      setMode("white");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-Lightmode";
      setInterval(() => {
        document.title = "TextUtils is Amazing platform";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils";
      }, 1500);
    } else {
      setMode("");
      document.body.style.backgroundColor = "";
      document.title = "TextUtils-Darkmode";
      setInterval(() => {
        document.title = "TextUtils is Amazing platform";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils";
      }, 1500);
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutTitle="About us"
        Mode={Mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          Mode={Mode}
          toggleMode={toggleMode}
        />
        <About
          showAlert={showAlert}
          Mode={Mode}
          toggleMode={toggleMode}
          alert={alert}
        />
      </div>
    </>
  );
}

export default App;
