import React, { useEffect, useState } from "react";

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
import { useParams } from "react-router-dom";
import axios from "axios";

export function Summary() {
  const params = useParams();
  console.log(params);

  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  useEffect(() => {
    axios
      .get(
        "http://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/Rooms/" +
          params.id
      )
      .then((res) => {
        setRooms({
          ...rooms,
          rooms: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(rooms.rooms.acf);
  return rooms.isLoaded ? (
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
              {rooms.rooms.acf.room.images
                ? rooms.rooms.acf.room.images.map((img) => (
                    <SwiperSlide>
                      <img src={img.length > 0 ? img : ""} />
                    </SwiperSlide>
                  ))
                : ""}
              {/* <SwiperSlide>
                      <img src={rooms.rooms[5].acf.room.images[0].image1.url} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={rooms.rooms[5].acf.room.images[0].image1.url} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={e.acf.room.images[0].image3.url} />
                    </SwiperSlide> */}
            </Swiper>
          </div>
          <div className="room-desc-info">
            <div className="main-room-infos">
              <div className="room-name-shortdesc">
                <h2 className="room-title">{rooms.rooms.acf.room.name}</h2>
                <p className="room-short-desc">
                  {rooms.rooms.acf.room.shortdesc}
                </p>
              </div>
              <div className="price-night-desktop">
                <h4 id="price">{rooms.rooms.acf.room.room_price}</h4>
                {/* <img src={e.acf.room.images[0].image1.url} /> */}

                <p id="nights">{rooms.rooms.acf.room.personnight}</p>
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
              {rooms.rooms.acf.room.longdesc}
            </p>

            <div className="room-buttons">
              <div className="price-night-mobile">
                <h4 id="price">{rooms.rooms.acf.room.room_price}</h4>
                <p>{rooms.rooms.acf.room.personnight}</p>
              </div>
              <div className="book-button">
                {/* <button className="default-button">
                  {rooms.rooms.acf.room.button}
                </button> */}
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
  ) : (
    ""
  );
}
