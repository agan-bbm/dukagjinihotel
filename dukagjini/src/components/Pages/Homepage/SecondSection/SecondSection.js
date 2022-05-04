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
              <h2 className="secondSectionHeader">{posts[2].acf.secondbanner.secondheading}</h2>
              <p className="secondSectionParagraph">{posts[2].acf.secondbanner.secondparagraph}</p>
            </div>
            <div className="secondSectionRight"></div>
          </div>
          <div className="secondImgContainer">
            <div className="secondImg">
              <img className="desktopVisibility" src={posts[2].acf.secondbanner.secondbannerimg} />

              <img className="tabletVisibility" src={posts[2].acf.secondbanner.secondbannerimgtablet} />

              <img className="mobileVisibility" src={posts[2].acf.secondbanner.secondbannerimgmobile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
