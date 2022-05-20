import React from "react";
import "./about.css";

import { AddressMap } from "../../../Pages/About/map";

function LocationTab({ posts }) {
  return (
    <>
      <div className="containerWrapper aboutTab">
        <h2>{posts.tabheading}</h2>
        <p>{posts.tabparagraph}</p>
        <div className="mapDiv">
          {" "}
          <AddressMap />
        </div>
      </div>
    </>
  );
}

export default LocationTab;
