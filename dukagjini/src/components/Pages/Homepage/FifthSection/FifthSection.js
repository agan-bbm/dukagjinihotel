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
          <div class="fifthSingleImg">
            <img class="image" src={posts.sixthimageone} />
            <div class="middle">
              <h3 class="middletext">Food</h3>
            </div>
          </div>
          <div class="fifthSingleImg">
            <img class="image" src={posts.sixthimagetwo} />
            <div class="middle">
              <h3 class="middletext">Restaurant</h3>
            </div>
          </div>
          <div class="fifthSingleImg">
            <img class="image" src={posts.sixthimagethree} />
            <div class="middle">
              <h3 class="middletext">Hotel</h3>
            </div>
          </div>
          <div class="fifthSingleImg">
            <img class="image" src={posts.sixthimagefour} />
            <div class="middle">
              <h3 class="middletext">SPA</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
