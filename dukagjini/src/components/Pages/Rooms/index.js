import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

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
import presidential from "../../../images/presidential.jpg";

//icons

import livingroom from "../../../images/livingroom.png";
import bath from "../../../images/bath.png";
import seaview from "../../../images/seaview.png";
import balcony from "../../../images/balcony.png";

export function Rooms() {
  return (
    <>
      <div className="containerWrapper">
        <div className="rooms">
          <div className="room-row">
            <div className="single-room">
              <h2 className="room-title">Standard Double Queen Room</h2>
              <div>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img src={standard} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={standard} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={standard} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={standard} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="icon-info">
                <div className="icon">
                  <img src={seaview} alt="" />
                  <p>Sea view</p>
                </div>
                <div className="icon">
                  <img src={balcony} alt="" />
                  <p>Balcony </p>
                </div>

                <div className="icon">
                  <img src={bath} alt="" />
                  <p>Bath</p>
                </div>

                <div className="icon">
                  <img src={livingroom} alt="" />
                  <p>Living Room</p>
                </div>
              </div>
              <div className="room-buttons">
                <div className="book-button">
                  <button>BOOK</button>
                </div>
                <div className="details-button">
                  <a href="">View</a>
                </div>
              </div>
            </div>
            <div className="single-room">
              <h2 className="room-title">Standard Double Queen Room</h2>
              <div>
                <img src={standard} alt="" />
              </div>
              <div className="icon-info">
                <div className="icon">
                  <img src={seaview} alt="" />
                  <p>Sea view</p>
                </div>
                <div className="icon">
                  <img src={balcony} alt="" />
                  <p>Balcony </p>
                </div>

                <div className="icon">
                  <img src={bath} alt="" />
                  <p>Bath</p>
                </div>

                <div className="icon">
                  <img src={livingroom} alt="" />
                  <p>Living Room</p>
                </div>
              </div>
              <div className="room-buttons">
                <div className="book-button">
                  <button>BOOK</button>
                </div>
                <div className="details-button">
                  <a href="">View</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="room-row">
            <div className="single-room">
              <h2 className="room-title">Standard Double Queen Room</h2>
              <div>
                <img src={standard} alt="" />
              </div>
              <div className="icon-info">
                <div className="icon">
                  <img src={seaview} alt="" />
                  <p>Sea view</p>
                </div>
                <div className="icon">
                  <img src={balcony} alt="" />
                  <p>Balcony </p>
                </div>

                <div className="icon">
                  <img src={bath} alt="" />
                  <p>Bath</p>
                </div>

                <div className="icon">
                  <img src={livingroom} alt="" />
                  <p>Living Room</p>
                </div>
              </div>
              <div className="room-buttons">
                <div className="book-button">
                  <button>BOOK</button>
                </div>
                <div className="details-button">
                  <a href="">View</a>
                </div>
              </div>
            </div>
            <div className="single-room">
              <h2 className="room-title">Standard Double Queen Room</h2>
              <div>
                <img src={standard} alt="" />
              </div>
              <div className="icon-info">
                <div className="icon">
                  <img src={seaview} alt="" />
                  <p>Sea view</p>
                </div>
                <div className="icon">
                  <img src={balcony} alt="" />
                  <p>Balcony </p>
                </div>

                <div className="icon">
                  <img src={bath} alt="" />
                  <p>Bath</p>
                </div>

                <div className="icon">
                  <img src={livingroom} alt="" />
                  <p>Living Room</p>
                </div>
              </div>
              <div className="room-buttons">
                <div className="book-button">
                  <button>BOOK</button>
                </div>
                <div className="details-button">
                  <a href="">View</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="room-row">
            <div className="single-room">
              <h2 className="room-title">Standard Double Queen Room</h2>
              <div>
                <img src={standard} alt="" />
              </div>
              <div className="icon-info">
                <div className="icon">
                  <img src={seaview} alt="" />
                  <p>Sea view</p>
                </div>
                <div className="icon">
                  <img src={balcony} alt="" />
                  <p>Balcony </p>
                </div>

                <div className="icon">
                  <img src={bath} alt="" />
                  <p>Bath</p>
                </div>

                <div className="icon">
                  <img src={livingroom} alt="" />
                  <p>Living Room</p>
                </div>
              </div>
              <div className="room-buttons">
                <div className="book-button">
                  <button>BOOK</button>
                </div>
                <div className="details-button">
                  <a href="">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
