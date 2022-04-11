import React from "react";

//CSS
import "./secondSection.css";

//IMAGES
import secondBanner from "../../../../images/secondsectionbanner.png";

function SecondSection({ posts }) {
  // console.log(posts);
  return (
    <div className="secondSection">
      <div className="containerWrapper">
        <div className="secondContainer">
          <div className="seconSectionTop">
            <div className="secondSectionLeft">
              <h2 className="secondSectionHeader">
                Shijoni bukuritë e maleve të Pejës, përgjatë qëndrimit tuaj.
              </h2>
              <p className="secondSectionParagraph">
                Përjetoni rehati dhe relaksim në ambientet e Hotel Dukagjinit.
                Me një standart të lartë të shërbimit dhe mirëkpritjes, ju do të
                përjetoni një pushim të paharruar.
              </p>
            </div>
            <div className="secondSectionRight"></div>
          </div>
          <div className="secondImgContainer">
            <div className="secondImg">
              <img src={secondBanner}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
