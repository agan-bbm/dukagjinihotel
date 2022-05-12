import React from "react";
import QuiltedImageList from "../../../components/Shared/Gallery/index";
import "./about.css";
import ImageMasonry from "../../../components/Shared/Masonry/index";

function About() {
  const style = {
    color: "white",
    // backgroundColor: "red",
    paddingTop: "50px",
    textAlign: "center",
  };

  return (
    <>
      <div className="containerWrapper">
        <div>
          <h2 style={style}>ABOUT US </h2>

          <QuiltedImageList />

          {/* <div className="images-grid">
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div3"></div>
            <div className="div4"></div>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default About;
