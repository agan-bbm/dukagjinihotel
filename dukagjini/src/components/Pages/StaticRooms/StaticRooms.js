import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
//styling
import "../Rooms/rooms.css";

//icons

import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader2 from "../../Utils/Loader";
import { Loader } from "rsuite";
import { height } from "@mui/system";

export function StaticRooms({ al }) {
  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });

  const [onlyFreeRooms, setOnlyFreeRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  useEffect(() => {
    axios
      .get("https://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/Rooms")
      .then((res) => {
        setRooms({
          ...rooms,
          rooms: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return rooms.isLoaded ? (
    <>
      <div className="containerWrapper">
        <div className="rooms" style={{ paddingTop: "100px" }}>
          {al ? (
            <h2 className="all-rooms-heading" id="scrollTo">
              Dhomat
            </h2>
          ) : (
            <h2 className="all-rooms-heading" id="scrollTo">
              Our Rooms
            </h2>
          )}
          {/* {showFreeRooms()} */}
          {rooms.rooms.map((e) => (
            <div className="single-room" key={e.id}>
              <div className="singleroom-flex">
                <div className="room-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    navigation
                  >
                    {!al
                      ? e.acf.room.images
                        ? e.acf.room.images.map((img) => (
                            <SwiperSlide>
                              <img src={img.length > 0 ? img : ""} />
                            </SwiperSlide>
                          ))
                        : ""
                      : e.acf.room.images
                      ? e.acf.room.images.map((img) => (
                          <SwiperSlide>
                            <img src={img.length > 0 ? img : ""} />
                          </SwiperSlide>
                        ))
                      : ""}
                  </Swiper>
                </div>
                <div className="room-desc-info">
                  <div className="main-room-infos">
                    <div className="room-name-shortdesc">
                      {!al ? (
                        <h2 className="room-title">{e.acf.room.name}</h2>
                      ) : (
                        <h2 className="room-title">{e.acf.roomal.name}</h2>
                      )}
                      {!al ? (
                        <p className="room-short-desc">
                          {e.acf.room.shortdesc}
                        </p>
                      ) : (
                        <p className="room-short-desc">
                          {e.acf.roomal.shortdesc}
                        </p>
                      )}
                    </div>
                    <div className="price-night-desktop">
                      {!al ? (
                        <h4 id="price">{e.acf.room.room_price}</h4>
                      ) : (
                        <h4 id="price">{e.acf.roomal.room_price}</h4>
                      )}

                      {!al ? (
                        <p id="nights">{e.acf.room.personnight}</p>
                      ) : (
                        <p id="nights">{e.acf.roomal.personnight}</p>
                      )}
                    </div>
                  </div>
                  <div className="icon-info">
                    {!al
                      ? e.acf.room.icons
                        ? e.acf.room.icons.map((icons) => (
                            <div className="icon-rooms-page">
                              <img src={icons.icon} alt="" />

                              <p>{icons.text}</p>
                            </div>
                          ))
                        : ""
                      : e.acf.roomal.icons
                      ? e.acf.roomal.icons.map((icons) => (
                          <div className="icon-rooms-page">
                            <img src={icons.icon} alt="" />

                            <p>{icons.text}</p>
                          </div>
                        ))
                      : ""}
                  </div>
                  <p className="rooms-p-desc" style={{ color: "#575757" }}>
                    {!al ? e.acf.room.longdesc : e.acf.roomal.longdesc}
                  </p>

                  <div className="room-buttons">
                    <div className="price-night-mobile">
                      {!al ? (
                        <h4 id="price">{e.acf.room.room_price}</h4>
                      ) : (
                        <h4 id="price">{e.acf.roomal.room_price}</h4>
                      )}
                      <p style={{ marginTop: "0px", color: "#575757" }}>
                        {!al
                          ? e.acf.room.personnight
                          : e.acf.roomal.personnight}
                      </p>
                    </div>
                    <div className="book-button">
                      <Link to={"/booking"}>
                        <button className="default-button">
                          {!al ? "Reserve" : "Rezervo"}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader2 />
    </div>
  );
}
