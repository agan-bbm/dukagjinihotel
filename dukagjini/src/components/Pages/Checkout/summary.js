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

export function Summary({ posts }) {
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
  const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  };
  const nights =
    parseInt(formatDate(localStorage.getItem("checkout")).substring(8, 10)) -
    parseInt(formatDate(localStorage.getItem("checkin")).substring(8, 10));

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
                      <img
                        src={img.length > 0 ? img : ""}
                        style={{ borderRadius: "20px" }}
                      />
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
                <p className="room-short-desc">
                  {rooms.rooms.acf.room.shortdesc}
                </p>
              </div>
              <div className="price-night-desktop">
                {/* <h4 id="price">{rooms.rooms.acf.room.room_price}</h4> */}
                {/* <img src={e.acf.room.images[0].image1.url} /> */}

                {/* <p id="nights">{rooms.rooms.acf.room.personnight}</p> */}
              </div>
            </div>
            <div className="icon-info">
              {rooms.rooms.acf.room.icons
                ? rooms.rooms.acf.room.icons.map((icons) => (
                    <div className="icon-rooms-page">
                      <img src={icons.icon} alt="" />

                      <p>{icons.text}</p>
                    </div>
                  ))
                : ""}
            </div>
            {/* <p className="rooms-p-desc" style={{ color: "#575757" }}>
              {rooms.rooms.acf.room.longdesc}
            </p> */}

            <div className="checkoutroom-buttons">
              <div className="price-night" style={{ textAlign: "left" }}>
                <h4
                  style={{
                    fontSize: "26px",
                    fontWeight: "400",
                    marginBottom: "0",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>Total:</span>{" "}
                  {rooms.rooms.acf.room.room_price}
                </h4>
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
        <h2>{posts.paymentmethod}</h2>
        <div className="payment-choices">
          <label class="radioLabel">
            <div className="imgAndText">
              <img src={cash} />
              <p>{posts.cash}</p>
            </div>
            <input name="payment-method" type="radio" checked="checked" />
          </label>
          <br />
          {/* <label class="radioLabel">
            <div className="imgAndText">
              <img src={cash} />
              <p>{posts.cash}</p>
            </div>
            <input name="payment-method" type="radio" />
          </label>
          <br />
          <h2>Additional comments</h2>
          <div class="commentLabel">
            <textarea className="messageBox" name="message" required />
          </div> */}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
