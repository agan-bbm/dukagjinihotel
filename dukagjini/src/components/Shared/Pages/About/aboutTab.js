import React from "react";
import "./about.css";

import TabPhoto from "../../../../images/aboutTabImg.jpg";

function AboutTab() {
  return (
    <>
      <div className="containerWrapper aboutTab">
        <h2>Location</h2>
        <p>
          An icon from 1956, Dukagjini Hotel always was known as one of the
          Elite Hotels in Kosovo. The Hotel is combined so well , by combining
          original with modern while new domestic premises reflects elegance
          charming.
        </p>
        <p>
          Hotel Dukagjini become a part of Dukagjini Group in 2008 year and
          underwent a total renovation in all the spaces.
        </p>
        {<img className="tabImg" src={TabPhoto}></img>}
      </div>
    </>
  );
}

export default AboutTab;
