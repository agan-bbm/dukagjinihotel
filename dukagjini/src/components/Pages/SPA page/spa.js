import React from "react";
import "./spa.css";

export function Spa({ posts }) {
  console.log(posts);
  return (
    <>
      <div className="custom-pages">
        <div
          style={{
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          <h2 style={{ color: "#CA9E72", fontSize: "30px" }}>
            Wellness Center
          </h2>
          <p>
            Our wellness & fitness center for a revitalizing time. Enjoy a
            relaxing break at the sauna, turkish bath, jacuzzi, massage center,
            fitness & fruit-ba
          </p>
        </div>
        <div
          className="wedding-banner"
          style={{
            backgroundImage: `url(${posts.acf.spa.fitnesscenter.banner})`,
          }}
        ></div>
        <div className="containerWrapper">
          <div className="singlespa">
            <h2 className="cp-heading">{posts.acf.spa.jacuzzi.mainheading}</h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div>
                  <p>{posts.acf.spa.jacuzzi.paragraph}</p>
                </div>
              </div>
              <div className="cp-images">
                <div className="cp-img mtop">
                  <img src={posts.acf.spa.jacuzzi.image1} alt="" />
                </div>
                {/* <div className="cp-img">
                  <img src={posts.acf.spa.jacuzzi.image2} alt="" />
                </div> */}
              </div>
            </div>
          </div>

          {/* <div className="singlespa">
            <h2 className="cp-heading">
              {posts.acf.spa.massagecenter.mainheading}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div>
                  <p>{posts.acf.spa.massagecenter.paragraph}</p>
                </div>
              </div>
              <div className="cp-images">
                <div className="cp-img mtop">
                  <img src={posts.acf.spa.massagecenter.image1} alt="" />
                </div>
                <div className="cp-img">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div> */}

          <div className="singlespa">
            <h2 className="cp-heading">{posts.acf.spa.sauna.mainheading}</h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div>
                  <p>{posts.acf.spa.sauna.paragraph}</p>
                  <img src={posts.acf.spa.sauna.image2} alt="" />
                </div>
              </div>
              <div className="cp-images">
                <div className="cp-img mtop">
                  <img src={posts.acf.spa.sauna.image1} alt="" />
                </div>
                {/* <div className="cp-img"></div> */}
              </div>
            </div>
          </div>

          {/* <div className="singlespa">
            <h2 className="cp-heading">
              {posts.acf.spa.trainterrace.mainheading}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div>
                  <p>{posts.acf.spa.trainterrace.paragraph}</p>
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
          </div> */}
          {/* 
          <div className="singlespa">
            <h2 className="cp-heading">
              {posts.acf.spa.turkishbath.mainheading}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div>
                  <p>{posts.acf.spa.turkishbath.paragraph}</p>
                </div>
              </div>
              <div className="cp-images">
                <div className="cp-img mtop">
                  <img src={posts.acf.spa.turkishbath.image1} alt="" />
                </div>
                <div className="cp-img">
                  <img src={posts.acf.spa.turkishbath.image2} alt="" />
                </div>
              </div>
            </div>
          </div> */}

          <div className="singlespa">
            <h2 className="cp-heading">{posts.acf.spa.wellnes.mainheading}</h2>
            <div className="single-gallery">
              <div className="cp-images">
                <div className="cp-img mtop">
                  <img src={posts.acf.spa.fitnesscenter.image2} alt="" />
                </div>
                <div className="cp-img"></div>
              </div>
              <div className="cp-textfield" id="fitness">
                <div>
                  <p>{posts.acf.spa.wellnes.paragraph}</p>
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
