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

function FourthSection({ posts }) {
  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  useEffect(() => {
    axios
      .get("http://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/Rooms/")
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
  return (
    <div className="fourthSection">
      <div className="containerWrapper">
        <div className="recomendations">
          <h2>Rekomandimet tona për ju!</h2>
          <p id="recommendationParagraph">
            Të gjitha dhomat tona janë unike me një stil të veçantë dhe luksoz.
            Hotel Dukagjini sjell për ju magjinë e të ndjehurit rehat në dhomat
            e përgatitura për komoditetin tuaj!
          </p>
          <div style={{ padding: "20px 0px" }}>
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
                        <img src={e.acf.room.images[0]} alt="" />
                      </div>

                      <h4>{e.acf.room.name}</h4>
                      <p className="recpar">{e.acf.room.shortdesc}</p>
                      <div className="icon-info">
                        {e.acf.room.icons
                          ? e.acf.room.icons.map((icons) => (
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
                          <span className="pernight">/Night</span>
                        </p>
                        <Link to={"/single-room/" + e.id}>
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

          <div className="bookOffer">
            <div className="offerLeft">
              <h2>{posts[2].acf.bookOffer.bookheading}</h2>
              <p>{posts[2].acf.bookOffer.bookparagraph}</p>
            </div>
            <div className="offerRight">
              <Link to="booking">
                {" "}
                <button className="default-button">Check Rooms</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="fourthContainer">
          {/* <div className="fourthHeader">
            <h2>Joyful experiences for you and your family</h2>
          </div> */}

          <div className="fourthSectionPart">
            <div className="fourthSectionLeft">
              <img src={posts[2].acf.fifthbanner[0].fifthimage} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  {posts[2].acf.fifthbanner[0].fifthheading}
                </h2>
                <p>{posts[2].acf.fifthbanner[0].fifthparagraph}</p>

                <Link to="/rooms">
                  <button className="gridBtn default-button">
                    View our rooms
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="fourthSectionFliped">
            <div className="fourthSectionLeft">
              <img src={posts[2].acf.fifthbanner[1].fifthimage} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  {posts[2].acf.fifthbanner[1].fifthheading}
                </h2>
                <p>{posts[2].acf.fifthbanner[1].fifthparagraph}</p>
                <Link to="/rooms">
                  <button className="gridBtn default-button">
                    View our rooms
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="fourthSectionPart">
            <div className="fourthSectionLeft">
              <img src={Img3} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  A world-class restaurant
                </h2>
                <p>
                  Ochean de View extends along a private, quiet and beautiful
                  tropical beach. Stay away from the crowd and enjoy the beauty
                  and lust.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
