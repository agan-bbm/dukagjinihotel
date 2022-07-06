import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "./sallat.css";
function Wedding({ posts, al }) {
  // console.log;
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
              {!al ? "VENUES" : "SALLAT TONA"}
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
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                  >
                    {posts.acf.Dasmat.whitehall.imagesthree.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="restaurant-img-gallery topImage">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                  >
                    {posts.acf.Dasmat.whitehall.imagestwo.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    navigation
                  >
                    {posts.acf.Dasmat.whitehall.images.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    navigation
                  >
                    {posts.acf.Dasmat.greathall.images.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    navigation
                  >
                    {posts.acf.Dasmat.conferencehall.images.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="restaurant-img-gallery topImage">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    navigation
                  >
                    {posts.acf.Dasmat.conferencehall.imagesthree.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                  >
                    {posts.acf.Dasmat.conferencehall.imagestwo.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
            <div className="single-gallery ">
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
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                  >
                    {posts.acf.Dasmat.panorama.images.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="restaurant-img-gallery topImage">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    navigation
                  >
                    {posts.acf.Dasmat.panorama.imagestwo.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                  >
                    {posts.acf.Dasmat.panorama.imagesthree.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
export default Wedding;
