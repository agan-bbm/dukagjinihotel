import React from "react";

//CSS
import "./secondSection.css";

//IMAGES
import sSBg from "../../../../images/sSBg.webp";

function SecondSection() {
  return (
    <div className="secondSection">
      <div className="containerWrapper">
        <div className="secondContainer">
          <div className="seconSectionTop">
            <div className="secondSectionLeft">
              <h2 className="secondSectionHeader">
                The shelter is the Outcome of the Dream
              </h2>
            </div>
            <div className="secondSectionRight">
              <p className="secondSectionParagraph">
                Broker ipsum dolor sit amet, consectetuer luxury elit. Carrara
                marble commodo ligula eget dolor cum sociis cozy penatibus et
                magnis.
              </p>
              <p className="secondSectionParagraph">
                Ochean de View extends along a private, quiet and beautiful
                tropical beach. Stay away from the crowd and enjoy the beauty
                and lust of Cancun with us.
              </p>
            </div>
          </div>
          <div className="secondImgContainer">
            <div className="secondImg">
              <img src={sSBg}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
