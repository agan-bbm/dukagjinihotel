import React from "react";

import "./about.css";
import portait from "../../../../images/portrait.jpg";
import landscape from "../../../../images/landscape.jpg";

import landone from "../../../../images/landone.jpg";

import landtwo from "../../../../images/landtwo.jpg";

function About() {
  const style = {
    color: "white",
    // backgroundColor: "red",
    paddingTop: "400px",
    textAlign: "center",
  };

  return (
    <>
      <div className="containerWrapper">
        <div>
          <h2 style={style}>ABOUT US </h2>

          <div class="images-grid">
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="div3"></div>
            <div class="div4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
