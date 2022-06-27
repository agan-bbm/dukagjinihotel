import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";

import "./restaurant.css";

function Restaurant({ posts, al }) {
  // console.log;
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
                  {/* <p className="cp-par-title">
                    {" "}
                    {posts.acf.restaurant.restorantet.para_title}{" "}
                  </p>{" "} */}
                  <p>
                    {" "}
                    {!al
                      ? posts.acf.restaurant.restorantet.paragraph
                      : posts.acf.restaurantal.restorantet.paragraph}{" "}
                  </p>{" "}
                </div>{" "}
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop={true}
                  >
                    {posts.acf.restaurant.restorantet.images.map((img) => (
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
                    {posts.acf.restaurant.restorantet.imagestwo.map((img) => (
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
                    {posts.acf.restaurant.restorantet.imagesthree.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                  >
                    {posts.acf.restaurant.restaurant22.images.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
              </div>{" "}
              <div className="cp-images">
                <div className="restaurant-img-gallery topImage ">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                  >
                    {posts.acf.restaurant.restaurant22.imagestwo.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
                <div className="restaurant-img-gallery ">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                  >
                    {posts.acf.restaurant.restaurant22.imagesthree.map(
                      (img) => (
                        <SwiperSlide>
                          <img src={img.length > 0 ? img : ""} />
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
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
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                  >
                    {posts.acf.restaurant.veranda.images.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
              </div>{" "}
              <div className="cp-images reverse">
                <div className="restaurant-img-gallery topImage">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    navigation
                  >
                    {posts.acf.restaurant.veranda.imagestwo.map((img) => (
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
                    {posts.acf.restaurant.veranda.imagesthree.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
                <div className="restaurant-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    navigation
                  >
                    {posts.acf.restaurant.shisha.images.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>{" "}
              </div>{" "}
              <div className="cp-images reverse">
                <div className="restaurant-img-gallery topImage">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                  >
                    {posts.acf.restaurant.shisha.imagestwo.map((img) => (
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
                    {posts.acf.restaurant.shisha.imagesthree.map((img) => (
                      <SwiperSlide>
                        <img src={img.length > 0 ? img : ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
      </div>{" "}
    </>
  );
}
export default Restaurant;
