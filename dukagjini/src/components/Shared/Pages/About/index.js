import React, { useState } from "react";
import QuiltedImageList from "../../Gallery";
import "./about.css";
import ImageMasonry from "../../Masonry";
import AboutTab from "./aboutTab";

import { Link } from "react-router-dom";

function About({ posts, founder }) {
  const style = {
    color: "white",
    // backgroundColor: "red",
    paddingTop: "50px",
    //textAlign: "center",
  };
  const [content, setContent] = useState(0);
  const showContent = () => {
    if (content === 0) {
      return <QuiltedImageList />;
    } else if (content === 1) {
      return (
        <div>
          <br></br>
          <ImageMasonry />
        </div>
      );
    } else
      return (
        <div>
          <AboutTab />
        </div>
      );
  };
  return (
    <div>
      <div className="aboutBanner">
        <div className="containerWrapper">
          <h2 /*style={style}*/ className="bannerH">About us </h2>
          <p className="bannerP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor inc ut labore et dolore magna aliqua. Ut enim ad
            minim veniam,Lorem ipsum dolor sit ame.
          </p>
        </div>
      </div>
      <div className="containerWrapper">
        <div className="about-menu">
          <div className="about-buttons">
            <div
              className="about-button hoverable"
              id={content === 0 ? "about-active" : ""}
              onClick={() => {
                setContent(0);
              }}
            >
              <p className="tabName">History</p>
            </div>

            <div
              className="about-button hoverable"
              id={content === 1 ? "about-active" : ""}
              onClick={() => {
                setContent(1);
              }}
            >
              <p className="tabName">Architecture</p>
            </div>
            <div
              className="about-button hoverable"
              id={content === 2 ? "about-active" : ""}
              onClick={() => {
                setContent(2);
              }}
            >
              <p className="tabName">Location</p>
            </div>
          </div>
        </div>
        {showContent()}
      </div>
    </div>
  );
}

export default About;
