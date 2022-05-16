import React, { useState } from "react";
import QuiltedImageList from "../../Gallery";
import "./about.css";
import ImageMasonry from "../../Masonry";
import AboutTab from "./aboutTab";

import { Link } from "react-router-dom";

function About({ posts, founder }) {

  console.log(window.innerWidth)
  const style = {
    color: "white",
    // backgroundColor: "red",
    paddingTop: "50px",
    //textAlign: "center",
  };
  const [content, setContent] = useState(0);
  const showContent = () => {
    if (content === 0) {
      return <QuiltedImageList posts={posts} />;
    } else if (content === 1) {
      return (
        <div>
          <AboutTab posts={posts[0].acf.abouttabs.secondtab} />
        </div>
      );
    } else
      return (
        <div>
          <AboutTab posts={posts[0].acf.abouttabs.thirdtab} />
        </div>
      );
  };
  return (
    <div>
      <div className="aboutBanner">
        <div className="containerWrapper"
          style={{ backgroundImage: `url(${posts[0].acf.aboutbannerimg})` }}
        >
          <h2 /*style={style}*/ className="bannerH">{posts[0].acf.aboutheading}</h2>
          <p className="bannerP">
            {posts[0].acf.aboutparagraph}
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
              <p className="tabName">{posts[0].acf.abouttabs.firsttab.tabheading}</p>
            </div>

            <div
              className="about-button hoverable"
              id={content === 1 ? "about-active" : ""}
              onClick={() => {
                setContent(1);
              }}
            >
              <p className="tabName">{posts[0].acf.abouttabs.secondtab.tabheading}</p>
            </div>
            <div
              className="about-button hoverable"
              id={content === 2 ? "about-active" : ""}
              onClick={() => {
                setContent(2);
              }}
            >
              <p className="tabName">{posts[0].acf.abouttabs.thirdtab.tabheading}</p>
            </div>
          </div>
        </div>
        {showContent()}
      </div>
    </div>
  );
}

export default About;
