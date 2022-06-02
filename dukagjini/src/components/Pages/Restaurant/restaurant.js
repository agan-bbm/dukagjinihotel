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
            backgroundImage: `url(${posts.acf.restaurant.restorani22.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            <h2 className="cp-heading">
              {" "}
              {al
                ? posts.acf.restaurantal.restorani22.title
                : posts.acf.restaurant.restorani22.title}{" "}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {" "}
                    {posts.acf.restaurant.restorani22.para_title}{" "}
                  </p>{" "}
                  <p> {posts.acf.restaurant.restorani22.paragraph} </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.restaurant.restorani22.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.restaurant.restorani22.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img
                    className="img-right-padd"
                    src={posts.acf.restaurant.restorani22.image3}
                    alt=""
                  />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom">
                <p className="cp-bottom-p">
                  {" "}
                  {posts.acf.restaurant.restorani22.undertext}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div
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
        </div>
        <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.restaurant.sallabardhe.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
          <div className="containerWrapper">
            <h2 className="cp-heading">
              {" "}
              {posts.acf.restaurant.sallabardhe.title}{" "}
            </h2>
            <div className="single-gallery">
              <div className="cp-textfield">
                <div className="cp-p-cont">
                  <p className="cp-par-title">
                    {" "}
                    {posts.acf.restaurant.sallabardhe.para_title}{" "}
                  </p>{" "}
                  <p> {posts.acf.restaurant.sallabardhe.paragraph} </p>{" "}
                </div>{" "}
                <div>
                  <img src={posts.acf.restaurant.sallabardhe.image1} alt="" />
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="cp-img">
                  <img
                    className="img-top"
                    src={posts.acf.restaurant.sallabardhe.image2}
                    alt=""
                  />
                </div>{" "}
                <div className="cp-img">
                  <img
                    className="img-right-padd"
                    src={posts.acf.restaurant.sallabardhe.image3}
                    alt=""
                  />
                </div>{" "}
              </div>{" "}
              <div className="cp-bottom">
                <p className="cp-bottom-p">
                  {" "}
                  {posts.acf.restaurant.sallabardhe.undertext}{" "}
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
                  <p> {posts.acf.restaurant.shisha.paragraph} </p>{" "}
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
        <div
          className="restaurant-banner"
          style={{
            backgroundImage: `url(${posts.acf.restaurant.treni.banner})`,
          }}
        ></div>{" "}
        <div className="custom-pages-container">
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
        </div>
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
                  <p> {posts.acf.restaurant.veranda.paragraph} </p>{" "}
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
