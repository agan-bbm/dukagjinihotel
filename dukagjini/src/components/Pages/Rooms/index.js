import React from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
//styling
import "./rooms.css";

//images
import standard from "../../../images/standard.jpg";
import deluxequeen from "../../../images/deluxequeen.jpg";
import deluxetwin from "../../../images/deluxetwin.jpg";
import penthouse from "../../../images/penthouse.jpg";

//icons

import livingroom from "../../../images/user.svg";
import bath from "../../../images/bed.svg";
import seaview from "../../../images/dashboard.svg";
import balcony from "../../../images/wifi.svg";

export function Rooms() {
  return (
    <>
      <div className="containerWrapper">
        <div className="rooms">
          <h2 className="all-rooms-heading">Our Rooms</h2>
          <div className="single-room">
            <div className="singleroom-flex">
              <div className="room-img-gallery">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  // onSlideChange={() => console.log("slide change")}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img src={standard} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={deluxequeen} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={deluxetwin} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={penthouse} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="room-desc-info">
                <div className="main-room-infos">
                  <div className="room-name-shortdesc">
                    <h2 className="room-title">Standard Double Queen Room</h2>
                    <p className="room-short-desc">
                      A 120sq foot bedroom apartment with a view.
                    </p>
                  </div>
                  <div className="price-night-desktop">
                    <h4 id="price">$120,00</h4>
                    <p id="nights">1 night, 2 persons</p>
                  </div>
                </div>
                <div className="icon-info">
                  <div className="icon-rooms-page">
                    <img src={seaview} alt="" />
                    <p>Sea view</p>
                  </div>
                  <div className="icon-rooms-page">
                    <img src={balcony} alt="" />
                    <p>Balcony </p>
                  </div>

                  <div className="icon-rooms-page">
                    <img src={bath} alt="" />
                    <p>Bath</p>
                  </div>

                  <div className="icon-rooms-page">
                    <img src={livingroom} alt="" />
                    <p>Living Room</p>
                  </div>
                </div>
                <p className="rooms-p-desc" style={{ color: "#575757" }}>
                  “Elegant, inviting and with a wonderful view over the city and
                  the beautiful park – this is how my hotelier imagined his
                  Sun-Room and I have to admit that I am proud of what he made
                  of me.”
                </p>

                <div className="room-buttons">
                  <div className="price-night-mobile">
                    <h4 id="price">$120,00</h4>
                    <p id="nights">1 night, 2 persons</p>
                  </div>
                  <div className="book-button">
                    <button>Reserve</button>
                  </div>
                  {/* <div className="details-button">
                    <a href="">View</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="single-room">
            <div className="singleroom-flex">
              <div className="room-img-gallery">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  // onSlideChange={() => console.log("slide change")}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img src={standard} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={deluxequeen} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={deluxetwin} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={penthouse} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="room-desc-info">
                <div className="main-room-infos">
                  <div className="room-name-shortdesc">
                    <h2 className="room-title">Standard Double Queen Room</h2>
                    <p className="room-short-desc">
                      A 120sq foot bedroom apartment with a view.
                    </p>
                  </div>
                  <div className="price-night-desktop">
                    <h4 id="price">$120,00</h4>
                    <p id="nights">1 night, 2 persons</p>
                  </div>
                </div>
                <div className="icon-info">
                  <div className="icon-rooms-page">
                    <img src={seaview} alt="" />
                    <p>Sea view</p>
                  </div>
                  <div className="icon-rooms-page">
                    <img src={balcony} alt="" />
                    <p>Balcony </p>
                  </div>

                  <div className="icon-rooms-page">
                    <img src={bath} alt="" />
                    <p>Bath</p>
                  </div>

                  <div className="icon-rooms-page">
                    <img src={livingroom} alt="" />
                    <p>Living Room</p>
                  </div>
                </div>
                <p className="rooms-p-desc" style={{ color: "#575757" }}>
                  “Elegant, inviting and with a wonderful view over the city and
                  the beautiful park – this is how my hotelier imagined his
                  Sun-Room and I have to admit that I am proud of what he made
                  of me.”
                </p>

                <div className="room-buttons">
                  <div className="price-night-mobile">
                    <h4 id="price">$120,00</h4>
                    <p id="nights">1 night, 2 persons</p>
                  </div>
                  <div className="book-button">
                    <button>Reserve</button>
                  </div>
                  {/* <div className="details-button">
                    <a href="">View</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="single-room">
            <div className="singleroom-flex">
              <div className="room-img-gallery">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  // onSlideChange={() => console.log("slide change")}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img src={standard} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={deluxequeen} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={deluxetwin} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={penthouse} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="room-desc-info">
                <div className="main-room-infos">
                  <div className="room-name-shortdesc">
                    <h2 className="room-title">Standard Double Queen Room</h2>
                    <p className="room-short-desc">
                      A 120sq foot bedroom apartment with a view.
                    </p>
                  </div>
                  <div className="price-night-desktop">
                    <h4 id="price">$120,00</h4>
                    <p id="nights">1 night, 2 persons</p>
                  </div>
                </div>
                <div className="icon-info">
                  <div className="icon-rooms-page">
                    <img src={seaview} alt="" />
                    <p>Sea view</p>
                  </div>
                  <div className="icon-rooms-page">
                    <img src={balcony} alt="" />
                    <p>Balcony </p>
                  </div>

                  <div className="icon-rooms-page">
                    <img src={bath} alt="" />
                    <p>Bath</p>
                  </div>

                  <div className="icon-rooms-page">
                    <img src={livingroom} alt="" />
                    <p>Living Room</p>
                  </div>
                </div>
                <p className="rooms-p-desc" style={{ color: "#575757" }}>
                  “Elegant, inviting and with a wonderful view over the city and
                  the beautiful park – this is how my hotelier imagined his
                  Sun-Room and I have to admit that I am proud of what he made
                  of me.”
                </p>

                <div className="room-buttons">
                  <div className="price-night-mobile">
                    <h4 id="price">$120,00</h4>
                    <p id="nights">1 night, 2 persons</p>
                  </div>
                  <div className="book-button">
                    <button>Reserve</button>
                  </div>
                  {/* <div className="details-button">
                    <a href="">View</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="single-room">
            <div className="singleroom-flex">
              <div className="room-img-gallery">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  // onSlideChange={() => console.log("slide change")}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img src={standard} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={deluxequeen} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={deluxetwin} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={penthouse} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="room-desc-info">
                <div className="main-room-infos">
                  <div className="room-name-shortdesc">
                    <h2 className="room-title">Standard Double Queen Room</h2>
                    <p className="room-short-desc">
                      A 120sq foot bedroom apartment with a view.
                    </p>
                  </div>
                  <div className="price-night-desktop">
                    <h4 id="price">$120,00</h4>
                    <p id="nights">1 night, 2 persons</p>
                  </div>
                </div>
                <div className="icon-info">
                  <div className="icon-rooms-page">
                    <img src={seaview} alt="" />
                    <p>Sea view</p>
                  </div>
                  <div className="icon-rooms-page">
                    <img src={balcony} alt="" />
                    <p>Balcony </p>
                  </div>

                  <div className="icon-rooms-page">
                    <img src={bath} alt="" />
                    <p>Bath</p>
                  </div>

                  <div className="icon-rooms-page">
                    <img src={livingroom} alt="" />
                    <p>Living Room</p>
                  </div>
                </div>
                <p className="rooms-p-desc" style={{ color: "#575757" }}>
                  “Elegant, inviting and with a wonderful view over the city and
                  the beautiful park – this is how my hotelier imagined his
                  Sun-Room and I have to admit that I am proud of what he made
                  of me.”
                </p>

                <div className="room-buttons">
                  <div className="price-night-mobile">
                    <h4 id="price">$120,00</h4>
                    <p id="nights">1 night, 2 persons</p>
                  </div>
                  <div className="book-button">
                    <button>Reserve</button>
                  </div>
                  {/* <div className="details-button">
                    <a href="">View</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
