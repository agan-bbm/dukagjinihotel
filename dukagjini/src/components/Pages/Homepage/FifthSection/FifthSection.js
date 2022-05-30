import React from "react";

//CSS
import "./fifthSection.css";

function FifthSection({ posts }) {
  return (
    <div className="fifthSection">
      <div className="containerWrapper">
        <h2>{posts.sixthheading}</h2>
        <p>{posts.sixthparagraph}</p>
        <div className="fifthImgs">
          <div className="fifthSingleImg">
            <img className="image" src={posts.sixthimageone} />
            <div className="middle">
              <h3 className="middletext">Food</h3>
            </div>
          </div>
          <div className="fifthSingleImg">
            <img className="image" src={posts.sixthimagetwo} />
            <div className="middle">
              <h3 className="middletext">Restaurant</h3>
            </div>
          </div>
          <div className="fifthSingleImg">
            <img className="image" src={posts.sixthimagethree} />
            <div className="middle">
              <h3 className="middletext">Hotel</h3>
            </div>
          </div>
          <div className="fifthSingleImg">
            <img className="image" src={posts.sixthimagefour} />
            <div className="middle">
              <h3 className="middletext">SPA</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
