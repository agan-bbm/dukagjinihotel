import React from "react";
import "./peja.css";

export function Peja() {
  return (
    <>
      <div className="custom-pages">
        <div
          className="peja-banner"
          style={{
            backgroundImage: `url("https://cmsdukagjini.blackbird.marketing/wp-content/uploads/2022/05/IMG_4919-2-1-1.webp")`,
          }}
        ></div>
        <div className="containerWrapper">
          <h2 className="cp-heading">WHAT TO DO IN PEJA</h2>

          <div className="single-gallery">
            <div className="cp-textfield">
              <div className="cp-paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                  ornare non elementum, placerat. Sapien mattis dui risus
                  tristique natoque nunc sed pellentesque congue. Praesent et
                  elit at ullamcorper cursus eros arcu. Risus ipsum aliquet
                  lacus amet, quam augue. Nisl vitae eu quis aenean proin ornare
                  pellentesque mauris. Eleifend elementum, at bibendum dui
                  curabitur quis eu magna.
                </p>
              </div>
              <div className="cp-singleimage">
                <img src="" alt="" />
              </div>
            </div>
            <div className="cp-images">
              <div className="cp-img mtop">
                <img src="" alt="" />
              </div>
              <div className="cp-img">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
