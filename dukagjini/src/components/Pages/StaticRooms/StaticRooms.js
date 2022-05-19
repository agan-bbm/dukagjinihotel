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

export function StaticRooms({}) {
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
      .get("http://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/Rooms")
      .then((res) => {
        setRooms({
          ...rooms,
          rooms: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(rooms);

  console.log(rooms);

  return rooms.isLoaded ? (
    <>
      <div className="containerWrapper">
        <div className="rooms">
          <h2 className="all-rooms-heading" id="scrollTo">
            Our Rooms
          </h2>
          {/* {showFreeRooms()} */}
          {rooms.rooms.map((e) => (
            <div className="single-room" key={e.id}>
              <div className="singleroom-flex">
                <div className="room-img-gallery">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                  >
                    {e.acf.room.images
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
                      <h2 className="room-title">{e.acf.room.name}</h2>
                      <p className="room-short-desc">{e.acf.room.shortdesc}</p>
                    </div>
                    <div className="price-night-desktop">
                      <h4 id="price">{e.acf.room.room_price}</h4>

                      <p id="nights">{e.acf.room.personnight}</p>
                    </div>
                  </div>
                  <div className="icon-info">
                    {e.acf.room.icons
                      ? e.acf.room.icons.map((icons) => (
                          <div className="icon-rooms-page">
                            <img src={icons.icon} alt="" />

                            <p>{icons.text}</p>
                          </div>
                        ))
                      : ""}
                  </div>
                  <p className="rooms-p-desc" style={{ color: "#575757" }}>
                    {e.acf.room.longdesc}
                  </p>

                  <div className="room-buttons">
                    <div className="price-night-mobile">
                      <h4 id="price">{e.acf.room.room_price}</h4>
                      <p style={{ marginTop: "0px", color: "#575757" }}>
                        {e.acf.room.personnight}
                      </p>
                    </div>
                    <div className="book-button">
                      <Link to={"/single-room/" + e.id}>
                        <button className="default-button">
                          {e.acf.room.button}
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
    ""
  );
}
