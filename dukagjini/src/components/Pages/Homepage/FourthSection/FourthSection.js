import React, { useEffect, useState } from "react";

//CSS
import "./fourthSection.css";

//IMAGES
import Img1 from "../../../../images/happy.png";
import Img2 from "../../../../images/modern.png";
import Img3 from "../../../../images/3.jpg";

import livingroom from "../../../../images/bed.svg";
import bath from "../../../../images/bathhub.svg";
// import wifi from "../../../../images/dashboard.svg";
import balcony from "../../../../images/user.svg";
import wifi from "../../../../images/wifi.svg";
import recommendedRoom from "../../../../images/recommendedRoom.png";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import axios from "axios";
import Loader2 from "../../../Utils/Loader";

function FourthSection({ posts, al }) {
  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  useEffect(() => {
    axios
      .get("https://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/Rooms/")
      .then((res) => {
        setRooms({
          ...rooms,
          rooms: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(rooms.rooms);
  return (
    <div className="fourthSection">
      <div className="containerWrapper">
        <div className="recomendations">
          <h2 id="recomendations4u">{posts.acf.fourthbanner.fourthheading}</h2>
          <p id="recommendationParagraph">{posts.acf.fourthbanner.paragraph}</p>
          <div className="pcmobRec" style={{ padding: "25px 0px" }}>
            <Swiper
              // slidesPerView={1}
              // centeredSlides={true}
              // spaceBetween={0}
              grabCursor={true}
              spaceBetween={50}
              slidesPerView={1}
              roundLengths={true}
              loop={true}
              pagination={true}
              modules={[Pagination]}
              loopAdditionalSlides={30}
              className=""
              breakpoints={{
                600: {
                  slidesPerView: 3,
                },
              }}
            >
              <div className="roomRecomendations">
                {rooms.rooms.map((e) => (
                  <SwiperSlide>
                    <div className="single-room-rec">
                      <div className="mainSingleImg">
                        {al ? (
                          <img src={e.acf.roomal.images[0]} alt="" />
                        ) : (
                          <img src={e.acf.room.images[0]} alt="" />
                        )}
                      </div>

                      <h4>{!al ? e.acf.room.name : e.acf.roomal.name}</h4>
                      <p className="recpar">{e.acf.room.shortdesc}</p>
                      <div className="icon-info">
                        {!al
                          ? e.acf.room.icons
                            ? e.acf.room.icons.map((icons) => (
                                <div className="icon">
                                  <div className="icon-flex">
                                    <img src={icons.icon} alt="" />

                                    <p>{icons.text}</p>
                                  </div>
                                </div>
                              ))
                            : ""
                          : e.acf.roomal.icons
                          ? e.acf.roomal.icons.map((icons) => (
                              <div className="icon">
                                <div className="icon-flex">
                                  <img src={icons.icon} alt="" />

                                  <p>{icons.text}</p>
                                </div>
                              </div>
                            ))
                          : ""}
                      </div>
                      <div className="price-book">
                        <p className="price">
                          {!al
                            ? e.acf.room.room_price
                            : e.acf.roomal.room_price}{" "}
                          <span className="pernight">
                            {al ? "/Natë" : "/Night"}
                          </span>
                        </p>
                        <Link to={"/booking/"}>
                          <button className="default-button">
                            {e.acf.room.button}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          <div id="tabletRoomRec" className="roomRecomendations">
            {rooms.rooms.map((e) => (
              <div className="single-room-rec">
                <div className="mainSingleImg">
                  {al ? (
                    <img src={e.acf.roomal.images[0]} alt="" />
                  ) : (
                    <img src={e.acf.room.images[0]} alt="" />
                  )}
                </div>

                <h4>{!al ? e.acf.room.name : e.acf.roomal.name}</h4>
                <p className="recpar">{e.acf.room.shortdesc}</p>
                <div className="icon-info">
                  {!al
                    ? e.acf.room.icons
                      ? e.acf.room.icons.map((icons) => (
                          <div className="icon">
                            <div className="icon-flex">
                              <img src={icons.icon} alt="" />

                              <p>{icons.text}</p>
                            </div>
                          </div>
                        ))
                      : ""
                    : e.acf.roomal.icons
                    ? e.acf.roomal.icons.map((icons) => (
                        <div className="icon">
                          <div className="icon-flex">
                            <img src={icons.icon} alt="" />

                            <p>{icons.text}</p>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
                <div className="price-book">
                  <p className="price">
                    {e.acf.room.room_price}{" "}
                    <span className="pernight">{al ? "/Natë" : "/Night"}</span>
                  </p>
                  <Link to={"/single-room/" + e.id}>
                    <button className="default-button">
                      {e.acf.room.button}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fourthContainer">
          <div className="fourthSectionPart">
            <div className="fourthSectionLeft">
              <img src={posts.acf.fifthbanner[0].fifthimage} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  {posts.acf.fifthbanner[0].fifthheading}
                </h2>
                <p>{posts.acf.fifthbanner[0].fifthparagraph}</p>

                <Link to="/our-rooms">
                  <button className="gridBtn default-button">
                    {al ? "Shiko dhomat" : "View our rooms"}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="fourthSectionFliped">
            <div className="fourthSectionLeft">
              <img src={posts.acf.fifthbanner[1].fifthimage} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  {posts.acf.fifthbanner[1].fifthheading}
                </h2>
                <p>{posts.acf.fifthbanner[1].fifthparagraph}</p>
                <Link to="/our-rooms">
                  <button className="gridBtn default-button">
                    {al ? "Shiko dhomat" : "View our rooms"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
