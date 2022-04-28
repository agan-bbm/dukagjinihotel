import React from "react";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import livingroom from "../../../images/user.svg";
import bath from "../../../images/bed.svg";
import seaview from "../../../images/dashboard.svg";
import balcony from "../../../images/wifi.svg";

import cash from "../../../images/cash.png";
import rbko from "../../../images/rbko.png";
import procredit from "../../../images/procredit.png";

import standard from "../../../images/standard.jpg";
import deluxequeen from "../../../images/deluxequeen.jpg";
import deluxetwin from "../../../images/deluxetwin.jpg";
import penthouse from "../../../images/penthouse.jpg";

export function Summary(props) {
  return (
    <>
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

            <div className="room-buttons">
              <div className="price-night-mobile">
                <h4 id="price">$120,00</h4>
                <p id="nights">1 night, 2 persons</p>
              </div>
              <div className="book-button default-button">
                <butto className="default-button">Reserve</butto>
              </div>
              {/* <div className="details-button">
                    <a href="">View</a>
                  </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="payments">
        <h2>Available Payment Methods:</h2>

        <div className="payment-choices">
          <div className="payment-single-choice">
            <img src={cash} alt="" />
            <p className="payment-p">Cash on arrival</p>
          </div>
          <div className="payment-single-choice">
            <img src={rbko} alt="" />
            <p className="payment-p">Cash on arrival</p>
          </div>
          <div className="payment-single-choice">
            <img src={procredit} alt="" />
            <p className="payment-p">Cash on arrival</p>
          </div>
        </div>
      </div>
    </>
  );
}
