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
          <img src={posts.sixthimageone} />
          <img src={posts.sixthimagetwo} />
          <img src={posts.sixthimagethree} />
          <img src={posts.sixthimagefour} />
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
