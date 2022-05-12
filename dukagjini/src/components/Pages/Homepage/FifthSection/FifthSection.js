import React from "react";

//CSS
import "./fifthSection.css";

function FifthSection({ posts }) {
  return (
    <div className="fifthSection">
      <div className="containerWrapper">
        <h2>{posts[2].acf.sixthbanner.sixthheading}</h2>
        <p>
          {posts[2].acf.sixthbanner.sixthparagraph}
        </p>
        <div className="fifthImgs">
          <img src={posts[2].acf.sixthbanner.sixthimageone} />
          <img src={posts[2].acf.sixthbanner.sixthimagetwo} />
          <img src={posts[2].acf.sixthbanner.sixthimagethree} />
          <img src={posts[2].acf.sixthbanner.sixthimagefour} />
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
