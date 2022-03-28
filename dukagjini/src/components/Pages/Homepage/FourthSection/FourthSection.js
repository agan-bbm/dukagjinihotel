import React from 'react'

//CSS
import "./fourthSection.css";

//IMAGES
import Img1 from "../../../../images/1.jpg";
import Img2 from "../../../../images/2.jpg";
import Img3 from "../../../../images/3.jpg";

function fourthSection() {
  return (
    <div className="fourthSection">
      <div className="containerWrapper">
        <div className="fourthContainer">
          <div className="fourthHeader">
            <h2>
              Joyful experiences for you and your family
            </h2>
          </div>

          <div className="fourthSectionPart">
            <div className="fourthSectionLeft">
              <img src={Img1} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  A world-class restaurant
                </h2>
                <p>Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust.</p>
              </div>
            </div>
          </div>


          <div className="fourthSectionFliped">
            <div className="fourthSectionLeft">
              <img src={Img2} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  A world-class restaurant
                </h2>
                <p>Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust.</p>
              </div>
            </div>
          </div>

          <div className="fourthSectionPart">
            <div className="fourthSectionLeft">
              <img src={Img3} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  A world-class restaurant
                </h2>
                <p>Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default fourthSection