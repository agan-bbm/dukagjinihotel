import React from "react";

//CSS
import "./secondSection.css";

//IMAGES
import secondBanner from "../../../../images/secondsectionbanner.png";

function SecondSection({ posts }) {
  return (
    <div className="secondSection">
      <div className="containerWrapper">
        <div className="secondContainer">
          <div className="seconSectionTop">
            <div className="secondSectionLeft">
              <h2 className="secondSectionHeader">{posts.secondheading}</h2>
              <p className="secondSectionParagraph">{posts.secondparagraph}</p>
            </div>
            <div className="secondSectionRight"></div>
          </div>
          <div className="secondImgContainer">
            <div className="secondImg">
              <img className="desktopVisibility" src={posts.secondbannerimg} />

              <img
                className="tabletVisibility"
                src={posts.secondbannerimgtablet}
              />

              <img
                className="mobileVisibility"
                src={posts.secondbannerimgmobile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
