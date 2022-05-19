import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
//styling
import "./rooms.css";

//icons

import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../Utils/Loader";
import Loader2 from "../../Utils/Loader";

export function Rooms({ freeRooms, loader, ref }) {
  console.log(loader);
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

  var firstRoomId,
    secondRoomId,
    thirdRoomId,
    fourthRoomId,
    fifthRoomId,
    sixthRoomId;

  rooms.rooms.map((e) => {
    switch (e.id) {
      case 87:
        firstRoomId = e;
        console.log(e);
        break;
      case 106:
        secondRoomId = e;
        break;
      case 107:
        thirdRoomId = e;
        break;
      case 108:
        fourthRoomId = e;
        break;
      case 109:
        fifthRoomId = e;
        break;
      case 110:
        sixthRoomId = e;
        break;
    }
  });

  var myArr = [];

  console.log("array", myArr);

  if (freeRooms) {
    for (var i = 0; i < freeRooms.rooms.length; i++) {
      if (freeRooms.rooms[i].RoomTypeName === "SDQR") {
        myArr.push(sixthRoomId);
      }

      if (freeRooms.rooms[i].RoomTypeName === "PRST") {
        myArr.push(fourthRoomId);
      }
      if (freeRooms.rooms[i].RoomTypeName === "PENT") {
        myArr.push(thirdRoomId);
      }
      if (freeRooms.rooms[i].RoomTypeName === "DDQR") {
        myArr.push(secondRoomId);
      }
      if (freeRooms.rooms[i].RoomTypeName === "DDTR") {
        myArr.push(fifthRoomId);
      }
    }
  }

  if (loader) {
    document.getElementById("scrollTo").scrollIntoView();
  }

  console.log(rooms);
  console.log(freeRooms);
  useEffect(() => {
    let myArr2 = [...new Set(myArr)];
    console.log("array2", myArr2);
    setOnlyFreeRooms({ ...onlyFreeRooms, rooms: myArr2, isLoaded: true });
  }, [freeRooms ? freeRooms.rooms : ""]);
  console.log("free rooooooooooooooms", onlyFreeRooms.rooms);

  return rooms.isLoaded ? (
    <>
      <div className="containerWrapper">
        <div className="rooms">
          <h2 className="all-rooms-heading" id="scrollTo">
            Our Rooms
          </h2>
          {/* {showFreeRooms()} */}
          {onlyFreeRooms.rooms.map((e) => (
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
          <div>{loader ? <Loader2 /> : null}</div>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}
