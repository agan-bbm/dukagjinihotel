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
import { borderRadius } from "@mui/system";

export function Summary() {
  const params = useParams();
  console.log(params);

  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  useEffect(() => {
    axios
      .get("http://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/Rooms/" + params.id)
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
        <div className="singleroom-flex" id="checkout-singleroom-style">
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
                      <img src={img.length > 0 ? img : ""} style={{ borderRadius: "20px" }} />
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
          <div className="room-desc-info" id="checkout-roomdescinfo">
            <div className="main-room-infos">
              <div className="room-name-shortdesc">
                <h2 className="room-title" style={{ textAlign: "left" }}>
                  {rooms.rooms.acf.room.name}
                </h2>
                <p className="room-short-desc">{rooms.rooms.acf.room.shortdesc}</p>
              </div>
              <div className="price-night-desktop">
                {/* <h4 id="price">{rooms.rooms.acf.room.room_price}</h4> */}
                {/* <img src={e.acf.room.images[0].image1.url} /> */}

                {/* <p id="nights">{rooms.rooms.acf.room.personnight}</p> */}
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
            {/* <p className="rooms-p-desc" style={{ color: "#575757" }}>
              {rooms.rooms.acf.room.longdesc}
            </p> */}

            <div className="checkoutroom-buttons">
              <div className="price-night" style={{ textAlign: "left" }}>
                <h4 style={{ fontSize: "26px", fontWeight: "400" }}>{rooms.rooms.acf.room.room_price}</h4>
                {/* <p>{rooms.rooms.acf.room.personnight}</p> */}
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
          <div className="reservation-comment payment-choices">
            <label for="comment">Comment</label>
            <br></br>
            <input type="text" name="commnet" placeholder="Comment" />
            <br></br>
            <label for="payment-method">Available Payment Methods:</label>
            <br></br>
            <div className="radioButton">
              <input type="radio" name="payment-method " />
              <label className="paymentCash" for="payment-method">
                <img src={cash} />
                Cash on arrival
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
