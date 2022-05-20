import React from "react";
import "./about.css";

import TabPhoto from "../../../../images/aboutTabImg.jpg";
import { AddressMap } from "../../../Pages/About/map";

function HistoryTab({ posts }) {
  return (
    <>
      <div className="containerWrapper aboutTab">
        <h2>{posts.tabheading}</h2>
        <p>{posts.tabparagraph}</p>
        {<img className="tabImg" src={posts.tabimg}></img>}
      </div>
    </>
  );
}

export default HistoryTab;
