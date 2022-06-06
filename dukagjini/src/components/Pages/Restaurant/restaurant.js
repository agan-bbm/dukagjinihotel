import React from "react";
import "./restaurant.css";

function Restaurant({ posts, al }) {
  console.log(posts);
  return (
    <>
      <div className="custom-pages">
        <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.restaurant.restorantet.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            <h2 className="cp-heading">
              {" "}
              {al
                ? posts.acf.restaurantal.restorantet.title
                : posts.acf.restaurant.restorantet.title}{" "}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {" "}
                    {posts.acf.restaurant.restorantet.para_title}{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    {!al
                      ? posts.acf.restaurant.restorantet.paragraph
                      : posts.acf.restaurantal.restorantet.paragraph}{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.restaurant.restorantet.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.restaurant.restorantet.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img
                    className="img-right-padd"
                    src={posts.acf.restaurant.restorantet.image3}
                    alt=""
                  />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom">
                <p className="cp-bottom-p">
                  {" "}
                  {posts.acf.restaurant.restorantet.undertext}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.restaurant.panorama.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            <h2 className="cp-heading">
              {" "}
              {posts.acf.restaurant.panorama.title}{" "}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield reverse">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {" "}
                    {posts.acf.restaurant.panorama.para_title}{" "}
                  </p>{" "}
                  <p> {posts.acf.restaurant.panorama.paragraph} </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.restaurant.panorama.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images reverse">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.restaurant.panorama.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img src={posts.acf.restaurant.panorama.image3} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom">
                <p className="cp-bottom-p">
                  {" "}
                  {posts.acf.restaurant.panorama.undertext}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div> */}
        <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.restaurant.restaurant22.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            <h2 className="cp-heading">
              {" "}
              {posts.acf.restaurant.restaurant22.title}{" "}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {" "}
                    {posts.acf.restaurant.restaurant22.para_title}{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    {!al
                      ? posts.acf.restaurant.restaurant22.paragraph
                      : posts.acf.restaurantal.restaurant22.paragraph}{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.restaurant.restaurant22.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.restaurant.restaurant22.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img
                    className="img-right-padd"
                    src={posts.acf.restaurant.restaurant22.image3}
                    alt=""
                  />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom">
                <p className="cp-bottom-p">
                  {" "}
                  {posts.acf.restaurant.restaurant22.undertext}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.restaurant.shisha.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            <h2 className="cp-heading">
              {" "}
              {posts.acf.restaurant.shisha.title}{" "}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield reverse">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {" "}
                    {posts.acf.restaurant.shisha.para_title}{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    {!al
                      ? posts.acf.restaurant.shisha.paragraph
                      : posts.acf.restaurantal.shisha.paragraph}{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.restaurant.shisha.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images reverse">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.restaurant.shisha.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img src={posts.acf.restaurant.shisha.image3} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom">
                <p className="cp-bottom-p">
                  {" "}
                  {posts.acf.restaurant.shisha.undertext}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.restaurant.treni.banner})`,
          }}
        ></div>{" "} */}
        {/* <div className="custom-pages-container">
          <div className="containerWrapper">
            <h2 className="cp-heading"> {posts.acf.restaurant.treni.title} </h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {" "}
                    {posts.acf.restaurant.treni.para_title}{" "}
                  </p>{" "}
                  <p> {posts.acf.restaurant.treni.paragraph} </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.restaurant.treni.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.restaurant.treni.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img
                    className="img-right-padd"
                    src={posts.acf.restaurant.treni.image3}
                    alt=""
                  />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom">
                <p className="cp-bottom-p">
                  {" "}
                  {posts.acf.restaurant.treni.undertext}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div> */}
        <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.restaurant.veranda.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            <h2 className="cp-heading">
              {" "}
              {posts.acf.restaurant.veranda.title}{" "}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield reverse">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {" "}
                    {posts.acf.restaurant.veranda.para_title}{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    {!al
                      ? posts.acf.restaurant.veranda.paragraph
                      : posts.acf.restaurantal.veranda.paragraph}{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.restaurant.veranda.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images reverse">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.restaurant.veranda.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img src={posts.acf.restaurant.veranda.image3} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom">
                <p className="cp-bottom-p">
                  {" "}
                  {posts.acf.restaurant.veranda.undertext}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
export default Restaurant;
