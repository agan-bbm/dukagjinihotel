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

export function Rooms({ freeRooms, loader, al, book, setBook }) {
  // console.log(loader);
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
  // console.log(rooms);

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
        // console.log(e);
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

  // console.log("array", myArr);
  // console.log(freeRooms.isLoaded);

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

  if (onlyFreeRooms.rooms.length > 0) {
    document.getElementById("scrollTo").scrollIntoView();
  }

  useEffect(() => {
    let myArr2 = [...new Set(myArr)];
    setOnlyFreeRooms({ ...onlyFreeRooms, rooms: myArr2, isLoaded: true });
  }, [freeRooms.rooms]);

  return freeRooms.rooms.length > 0 ? (
    <>
      <div className="containerWrapper">
        <div className="rooms">
          <h2 className="all-rooms-heading" id="scrollTo">
            {onlyFreeRooms.rooms.length > 0
              ? al
                ? "Dhomat tona të lira"
                : "Our Free Rooms"
              : al
              ? "Na vjen keq! Nuuk kemi dhoma te lira per këto data!"
              : "Sorry! We don not have available rooms for the selected dates."}
          </h2>

          {/* {showFreeRooms()} */}
          {onlyFreeRooms.rooms.map((e) => {
            return e.acf.room.max_persons >= book.adult + book.children ? (
              <div className="single-room" key={e.id}>
                <div className="singleroom-flex">
                  <div className="room-img-gallery">
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={50}
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
                        : e.acf.roomal.images
                        ? e.acf.roomal.images.map((img) => (
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
                        <h2 className="room-title">
                          {!al ? e.acf.room.name : e.acf.roomal.name}
                        </h2>
                        <p className="room-short-desc">
                          {!al ? e.acf.room.shortdesc : e.acf.roomal.shortdesc}
                        </p>
                      </div>
                      <div className="price-night-desktop">
                        <h4 id="price">
                          {!al
                            ? e.acf.room.room_price
                            : e.acf.roomal.room_price}
                        </h4>

                        <p id="nights">
                          {!al
                            ? e.acf.room.personnight
                            : e.acf.roomal.personnight}
                        </p>
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
                        <h4 id="price">
                          {!al
                            ? e.acf.room.room_price
                            : e.acf.roomal.room_price}
                        </h4>
                        <p style={{ marginTop: "0px", color: "#575757" }}>
                          {!al
                            ? e.acf.room.personnight
                            : e.acf.roomal.personnight}
                        </p>
                      </div>
                      <div className="book-button">
                        <Link to={"/single-room/" + e.id}>
                          <button className="default-button">
                            {!al ? "Reserve" : "Rezervo"}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </>
  ) : (
    <div>{loader ? <Loader2 /> : null}</div>
  );
}
