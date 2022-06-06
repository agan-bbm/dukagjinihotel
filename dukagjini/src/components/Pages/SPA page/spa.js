import React from "react";
import "./spa.css";

export function Spa({ posts, al }) {
  console.log(posts);
  return (
    <>
      <div className="custom-pages">
        <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.spa.mainbanner})`,
          }}
        ></div>{" "}
        <div
          style={{
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          <div className="containerWrapper">
            <h2 className="cp-heading">WELLNESS CENTER</h2>
            <p>
              {!al
                ? posts.acf.spa.wellnes.paragraph
                : posts.acf.spaal.wellnes.paragraph}
            </p>
          </div>
        </div>
        <div
          className="wedding-banner"
          style={{
            backgroundImage: `url(${posts.acf.spa.fitnesscenter.banner})`,
          }}
        ></div>
        <div className="containerWrapper">
          <div className="singlespa">
            <div className="single-gallery">
              <div className="cp-textfield">
                <div>
                  <p className="cp-par-title">
                    {posts.acf.spa.jacuzzi.mainheading}
                  </p>

                  <p>
                    {!al
                      ? posts.acf.spa.jacuzzi.paragraph
                      : posts.acf.spaal.jacuzzi.paragraph}
                  </p>
                </div>
              </div>
              <div className="cp-images">
                <div className="cp-img mtop">
                  <img src={posts.acf.spa.jacuzzi.image1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="singlespa">
            <div className="single-gallery" id="spa-sauna">
              <div className="cp-textfield">
                <div>
                  <p className="cp-par-title">
                    {posts.acf.spa.sauna.mainheading}
                  </p>

                  <p>
                    {!al
                      ? posts.acf.spa.sauna.paragraph
                      : posts.acf.spaal.sauna.paragraph}
                  </p>
                </div>
              </div>
              <div className="cp-images">
                <div className="cp-img mtop">
                  <img src={posts.acf.spa.sauna.image2} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="singlespa">
            <div className="single-gallery">
              <div className="cp-images">
                <div className="cp-img mtop">
                  <img src={posts.acf.spa.fitnesscenter.image2} alt="" />
                </div>
                <div className="cp-img"></div>
              </div>
              <div className="cp-textfield" id="fitness">
                <div>
                  <p className="cp-par-title">
                    {posts.acf.spa.wellnes.mainheading}
                  </p>

                  <p>
                    {!al
                      ? posts.acf.spa.fitnesscenter.paragraph
                      : posts.acf.spaal.fitnesscenter.paragraph}
                  </p>
                  <img src={posts.acf.spa.fitnesscenter.image1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
