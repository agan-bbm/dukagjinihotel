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
import { Rooms } from "../Rooms";

export function Summary({ posts, book, setBook, al }) {
  const params = useParams();

  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  useEffect(() => {
    axios
      .get(
        "https://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/Rooms/" +
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
    parseInt(formatDate(book.checkout).substring(8, 10)) -
    parseInt(formatDate(book.checkin).substring(8, 10));

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
            >
              {!al
                ? rooms.rooms.acf.room.images
                  ? rooms.rooms.acf.room.images.map((img) => (
                      <SwiperSlide>
                        <img
                          src={img.length > 0 ? img : ""}
                          style={{ borderRadius: "20px" }}
                        />
                      </SwiperSlide>
                    ))
                  : ""
                : rooms.rooms.acf.roomal.images
                ? rooms.rooms.acf.roomal.images.map((img) => (
                    <SwiperSlide>
                      <img
                        src={img.length > 0 ? img : ""}
                        style={{ borderRadius: "20px" }}
                      />
                    </SwiperSlide>
                  ))
                : ""}
            </Swiper>
          </div>
          <div className="room-desc-info" id="checkout-roomdescinfo">
            <div className="main-room-infos">
              <div className="room-name-shortdesc">
                <h2 className="room-title" style={{ textAlign: "left" }}>
                  {!al
                    ? rooms.rooms.acf.room.name
                    : rooms.rooms.acf.roomal.name}
                </h2>
                <p className="room-short-desc">
                  {!al
                    ? rooms.rooms.acf.room.shortdesc
                    : rooms.rooms.acf.roomal.shortdesc}
                </p>
              </div>
              <div className="price-night-desktop"></div>
            </div>
            <div className="icon-info">
              {!al
                ? rooms.rooms.acf.room.icons
                  ? rooms.rooms.acf.room.icons.map((icons) => (
                      <div className="icon-rooms-page">
                        <img src={icons.icon} alt="" />

                        <p>{icons.text}</p>
                      </div>
                    ))
                  : ""
                : rooms.rooms.acf.roomal.icons
                ? rooms.rooms.acf.roomal.icons.map((icons) => (
                    <div className="icon-rooms-page">
                      <img src={icons.icon} alt="" />

                      <p>{icons.text}</p>
                    </div>
                  ))
                : ""}
            </div>

            <div className="checkoutroom-buttons">
              <div className="price-night" style={{ textAlign: "left" }}>
                {!al ? (
                  <h4
                    style={{
                      fontSize: "26px",
                      fontWeight: "400",
                      marginBottom: "0",
                    }}
                  >
                    <span style={{ fontSize: "22px" }}>Total:</span>{" "}
                    {parseInt(book.price)}€
                  </h4>
                ) : (
                  <h4
                    style={{
                      fontSize: "26px",
                      fontWeight: "400",
                      marginBottom: "0",
                    }}
                  >
                    <span style={{ fontSize: "22px" }}>Total:</span>{" "}
                    {parseInt(book.price)}€
                  </h4>
                )}
              </div>
              <div className="book-button"></div>
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
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
