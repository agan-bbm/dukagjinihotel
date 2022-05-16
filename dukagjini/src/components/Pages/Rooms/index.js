import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";

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

//icons

import livingroom from "../../../images/user.svg";
import bath from "../../../images/bed.svg";
import seaview from "../../../images/dashboard.svg";
import balcony from "../../../images/wifi.svg";
import axios from "axios";
import Singleroom from "../Singleroom/singleroom";
import { Link, useNavigate, useParams } from "react-router-dom";

export function Rooms({ freeRooms }) {
  const [state, setState] = useState({
    posts: [],
    isLoaded: false,
  });
  // freeRooms.rooms.map((e) => {
  //   // console.log(e.RoomTypeName);
  // });
  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  const [showRooms, setShowRooms] = useState({
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

  // useEffect(()=>{
  //   for (var i = 0; i < freeRooms.rooms.length; i++) {
  //     if (freeRooms.rooms[i].RoomTypeName === "SDQR") {
  //       // return sixthRoomId;
  //       console.log(sixthRoomId);
  //       setShowRooms({ ...showRooms, rooms: sixthRoomId });
  //     } else if (freeRooms.rooms[i].RoomTypeName === "DDQR") {
  //       // return secondRoomId;

  //       console.log(secondRoomId);

  //       setShowRooms({ ...showRooms, rooms: secondRoomId });
  //     } else if (freeRooms.rooms[i].RoomTypeName === "PRST") {
  //       // return fourthRoomId;
  //       console.log(fourthRoomId);
  //       setShowRooms({ ...showRooms, rooms: fourthRoomId });
  //     } else if (freeRooms.rooms[i].RoomTypeName === "PENT") {
  //       // return thidRoomId;
  //       console.log(thirdRoomId);
  //       setShowRooms({ ...showRooms, rooms: thirdRoomId });
  //     } else if (freeRooms.rooms[i].RoomTypeName === "DDTR") {
  //       // return fifthRoomId;
  //       console.log(fifthRoomId);
  //       setShowRooms({ ...showRooms, rooms: fifthRoomId });
  //     } else {
  //       console.log("ska maaa");
  //     }
  //   }
  // },[])
  console.log(showRooms);
  // };
  rooms.isLoaded ? console.log(rooms.rooms.acf) : console.log("sadsa");
  return rooms.isLoaded ? (
    <>
      <div className="containerWrapper">
        <div className="rooms">
          <h2 className="all-rooms-heading">Our Rooms</h2>
          {rooms.rooms.map((e) => (
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
                    {e.acf.room.images
                      ? e.acf.room.images.map((img) => (
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
                      <h2 className="room-title">{e.acf.room.name}</h2>
                      <p className="room-short-desc">{e.acf.room.shortdesc}</p>
                    </div>
                    <div className="price-night-desktop">
                      <h4 id="price">{e.acf.room.room_price}</h4>
                      {/* <img src={e.acf.room.images[0].image1.url} /> */}

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
                    {/* <div className="details-button">
                    <a href="">View</a>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <p>sdasdsaads</p>
  );
}
