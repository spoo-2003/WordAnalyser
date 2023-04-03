/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Updated to Uppercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let lowtext = text.toLowerCase();
    setText(lowtext);
    props.showAlert("Updated to LowerCase", "success");
  };
  const handleclear = () => {
    setText("");
    props.showAlert("cleared successfully", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Removed Extraspaces", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1
          style={{
            color: props.Mode === "" ? "" : "black",
          }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.Mode === "" ? "" : "white",
              color: props.Mode === "" ? "" : "black",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-4 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-4 my-2"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-4 my-2"
          onClick={handleclear}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-4 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2
          style={{
            color: props.Mode === "" ? "" : "black",
          }}
        >
          Your text summary
        </h2>
        <p
          style={{
            color: props.Mode === "" ? "" : "black",
          }}
        >
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p
          style={{
            color: props.Mode === "" ? "" : "black",
          }}
        >
          Mintutes to read:{" "}
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          min
        </p>
        <h2
          style={{
            color: props.Mode === "" ? "" : "black",
          }}
        >
          Preview
        </h2>
        <p
          style={{
            color: props.Mode === "" ? "" : "black",
          }}
        >
          {text.length > 0
            ? text
            : "Enter something in textbox to preview here"}
        </p>
      </div>
    </>
  );
}
