/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "",
  // });

  let myStyle = {
    color: props.Mode == "" ? "" : "black",
    backgroundColor: props.Mode == "" ? "" : "white",
  };

  return (
    <>
      <div className="container">
        <h2 className="my-2" style={myStyle}>
          About Us
        </h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Text Analysis
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  Text analysis is the process of using computer systems to read
                  and understand human-written text for business insights. Text
                  analysis software can independently classify, sort, and
                  extract information from text to identify patterns,
                  relationships, sentiments, and other actionable knowledge.{" "}
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Things TextUtils do
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  This website is used to get preview of the text you enter, get
                  uppercase, Lowercase and remove all the extra spaces and
                  clears the text, you will get the time data to read the
                  pharases you write, information about number of words and
                  letters.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Is text analytics useful?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  Whether it's customer feedback, phone transcripts or lengthy
                  feedback surveys, text analytics helps teams make quantitative
                  and qualitative sense from text data with relative ease. Since
                  80% of business information is unstructured, primarily in a
                  text format, analysis of text is useful in all functions of a
                  business.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
