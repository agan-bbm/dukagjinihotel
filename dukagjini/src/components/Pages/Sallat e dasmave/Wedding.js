import React from "react";
import "./sallat.css";
function Wedding({ posts, al }) {
  console.log(posts);
  return (
    <>
      <div className="custom-pages" id="weddingid">
        <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.Dasmat.mainbanner})`,
          }}
        ></div>{" "}
        {/* WHITE HALL  */}
        <div
          className="wedding-banner"
          style={{
            backgroundImage: `url(${posts.acf.Dasmat.whitehall.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            {/* <h2 className="cp-heading">
              {al
                ? posts.acf.Dasmat.whitehallal.title
                : posts.acf.Dasmat.whitehall.title}{" "}
            </h2> */}
            <h2 className="cp-heading" id="weddTitleMain">
              WEDDING HALL
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {al
                      ? posts.acf.Dasmat.whitehallal.para_title
                      : posts.acf.Dasmat.whitehall.para_title}
                  </p>{" "}
                  <p>
                    {" "}
                    {al
                      ? posts.acf.Dasmat.whitehallal.paragraph
                      : posts.acf.Dasmat.whitehall.paragraph}{" "}
                  </p>{" "}
                  <p className="cp-bottom-p">
                    {" "}
                    {al
                      ? posts.acf.Dasmat.whitehallal.undertext
                      : posts.acf.Dasmat.whitehall.undertext}{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.Dasmat.whitehall.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.Dasmat.whitehall.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img
                    className="img-right-padd"
                    src={posts.acf.Dasmat.whitehall.image3}
                    alt=""
                  />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom"></div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div className="custom-pages-container">
          <div className="containerWrapper">
            <div className="single-gallery">
              <div className="cp-textfield">
                <div>
                  <img src={posts.acf.Dasmat.greathall.image1} alt="" />
                </div>{" "}
                <div className="cp-p-cont" id="greathall">
                  <p className="cp-par-title">
                    {al
                      ? posts.acf.Dasmat.greathallal.para_title
                      : posts.acf.Dasmat.greathall.para_title}
                  </p>{" "}
                  <p>
                    {" "}
                    {al
                      ? posts.acf.Dasmat.greathallal.paragraph
                      : posts.acf.Dasmat.greathall.paragraph}{" "}
                  </p>{" "}
                  <p className="cp-bottom-p">
                    {" "}
                    {al
                      ? posts.acf.Dasmat.greathallal.undertext
                      : posts.acf.Dasmat.greathall.undertext}{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* <div className="cp-images">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.Dasmat.greathall.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img
                    className="img-right-padd"
                    src={posts.acf.Dasmat.greathall.image3}
                    alt=""
                  />
                </div>{" "}
              </div>{" "} */}
              <div className="cp-bottom"></div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* Conference HALL  */}
        <div
          className="wedding-banner"
          style={{
            backgroundImage: `url(${posts.acf.Dasmat.conferencehall.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            {/* <h2 className="cp-heading">
              {al
                ? posts.acf.Dasmat.conferencehall.title
                : posts.acf.Dasmat.conferencehall.title}{" "}
            </h2> */}
            <div className="single-gallery">
              <div className="cp-textfield">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {al
                      ? posts.acf.Dasmat.conferencehallal.para_title
                      : posts.acf.Dasmat.conferencehall.para_title}
                  </p>{" "}
                  <p>
                    {" "}
                    {al
                      ? posts.acf.Dasmat.conferencehallal.paragraph
                      : posts.acf.Dasmat.conferencehall.paragraph}{" "}
                  </p>{" "}
                  <p className="cp-bottom-p">
                    {" "}
                    {al
                      ? posts.acf.Dasmat.conferencehallal.undertext
                      : posts.acf.Dasmat.conferencehall.undertext}{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.Dasmat.conferencehall.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.Dasmat.conferencehall.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img
                    className="img-right-padd"
                    src={posts.acf.Dasmat.conferencehall.image3}
                    alt=""
                  />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* Panorama HALL  */}
        <div
          className="wedding-banner"
          style={{
            backgroundImage: `url(${posts.acf.Dasmat.panorama.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            {/* <h2 className="cp-heading">
              {al
                ? posts.acf.Dasmat.panoramaal.title
                : posts.acf.Dasmat.panorama.title}{" "}
            </h2> */}
            <div className="single-gallery">
              <div className="cp-textfield">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {al
                      ? posts.acf.Dasmat.panoramaal.para_title
                      : posts.acf.Dasmat.panorama.para_title}
                  </p>{" "}
                  <p>
                    {" "}
                    {al
                      ? posts.acf.Dasmat.panoramaal.paragraph
                      : posts.acf.Dasmat.panorama.paragraph}{" "}
                  </p>{" "}
                  <p className="cp-bottom-p">
                    {" "}
                    {al
                      ? posts.acf.Dasmat.panoramaal.undertext
                      : posts.acf.Dasmat.panorama.undertext}{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.Dasmat.panorama.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.Dasmat.panorama.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img
                    className="img-right-padd"
                    src={posts.acf.Dasmat.panorama.image3}
                    alt=""
                  />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom"></div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
export default Wedding;
