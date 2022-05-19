import React from "react";
import "./about.css";

import TabPhoto from "../../../../images/aboutTabImg.jpg";
import { AddressMap } from "../../../Pages/About/map";

function AboutTab({ posts }) {
  return (
    <>
      <div className="containerWrapper aboutTab">
        <h2>{posts.tabheading}</h2>
        <p>{posts.tabheading}</p>
        <div className="mapDiv">
          {" "}
          <AddressMap />
        </div>
        {<img className="tabImg" src={posts.tabimg}></img>}
      </div>
    </>
  );
}

export default AboutTab;
