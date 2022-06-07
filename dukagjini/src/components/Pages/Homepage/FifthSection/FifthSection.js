import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/restaurant">
              <img className="image" src={posts.sixthimageone} />
              <div className="middle">
                <h3 className="middletext">Food</h3>
              </div>
            </Link>
          </div>
          <div className="fifthSingleImg">
            <Link to="/restaurant">
              <img className="image" src={posts.sixthimagetwo} />
              <div className="middle">
                <h3 className="middletext">Restaurant</h3>
              </div>
            </Link>
          </div>

          <div className="fifthSingleImg">
            <Link to="/our-rooms">
              <img className="image" src={posts.sixthimagethree} />
              <div className="middle">
                <h3 className="middletext">Hotel</h3>
              </div>
            </Link>
          </div>

          <div className="fifthSingleImg">
            <Link to="/spa">
              <img className="image" src={posts.sixthimagefour} />
              <div className="middle">
                <h3 className="middletext">SPA</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
