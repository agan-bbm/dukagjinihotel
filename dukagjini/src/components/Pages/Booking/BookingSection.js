import React, { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// CSS
import "../Booking/booking.css";
// import "swiper/css";

//images
import Img1 from "../../../images/1.jpg";
import Img2 from "../../../images/2.jpg";
import Img3 from "../../../images/3.jpg";
import Img4 from "../../../images/4.jpg";

//icons
import bath from "../../../images/bath.png";
import seaview from "../../../images/seaview.png";
import balcony from "../../../images/balcony.png";

function BookingSection() {
  const [dates, setDates] = useState({
    from: null,
    to: null,
  });
  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });

  async function getRooms() {
    await axios
      .get(
        `http://cmsdukagjini.blackbird.marketing/wp-content/fetch.php?fromDate=${dates.from}&toDate=${dates.to}`,
        {}
      )
      .then((res) => {
        setRooms({
          ...rooms,
          rooms: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }
  console.log(rooms.rooms);

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
    return [year, month, day].join("/");
  };
  var today = new Date().toISOString().split("T")[0];
  const [visible, setVisible] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  return (
    <>
      <div className="containerWrapper">
        <div className="booking-main">
          <div className="inputs-container">
            <label htmlFor="start">Start Date</label>
            <input
              type="date"
              id="start"
              name="fromDate"
              required
              min={today}
              onChange={(e) => {
                setDates({ ...dates, from: formatDate(e.target.value) });
              }}
            />
          </div>
          <div className="inputs-container">
            <label htmlFor="end">End Date</label>
            <input
              type="date"
              id="end"
              name="toDate"
              min={today}
              required
              onChange={(e) => {
                setDates({ ...dates, to: formatDate(e.target.value) });
              }}
            />
          </div>
          <button
            className="booking-mainbutton"
            onClick={() => {
              getRooms();
            }}
          >
            Book
          </button>

          <div className="rooms-container">
            <div className="single-room-card">
              <div>
                <div className="room-img-slider">
                  {/* <img src={Img2} alt="" /> */}
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <img src={Img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div>
                <div className="room-info-container">
                  <div className="room-name">GRAND SUITE LAGO</div>
                  <div className="room-short-desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <div className="room-row-info">
                    <div className="room-desc-icons">
                      <div className="room-icon">
                        <img src={seaview} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={balcony} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={bath} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={seaview} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={balcony} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={bath} alt="" />
                      </div>
                    </div>
                    <div className="room-price-and-more">
                      <p>
                        <span className="room-normal-text">
                          FROM <br /> €1,280/NIGHT <br />
                        </span>
                        <span className="grey">EXCLUDING TAXES AND FEES</span>
                      </p>
                    </div>
                  </div>

                  <div className="offer">
                    <div>
                      <div className="offer">
                        <button
                          className="view-offer"
                          onClick={() => {
                            setVisible({
                              ...visible,
                              1: !visible[1],
                            });
                          }}
                        >
                          {visible ? "VIEW OFFER" : "VIEW OFFER"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {visible[1] ? (
              <div className={"offer-images"}>
                <img src={Img2} alt="" />
                <img src={Img1} alt="" />
                <img src={Img3} alt="" />
                <img src={Img2} alt="" />
              </div>
            ) : null}
            <div className="single-room-card">
              <div>
                <div className="room-img-slider">
                  {/* <img src={Img2} alt="" /> */}
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <img src={Img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div>
                <div className="room-info-container">
                  <div className="room-name">GRAND SUITE LAGO</div>
                  <div className="room-short-desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <div className="room-row-info">
                    <div className="room-desc-icons">
                      <div className="room-icon">
                        <img src={seaview} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={balcony} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={bath} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={seaview} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={balcony} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={bath} alt="" />
                      </div>
                    </div>
                    <div className="room-price-and-more">
                      <p>
                        <span className="room-normal-text">
                          FROM <br /> €1,280/NIGHT <br />
                        </span>
                        <span className="grey">EXCLUDING TAXES AND FEES</span>
                      </p>
                    </div>
                  </div>

                  <div className="offer">
                    <div>
                      <div className="offer">
                        <button
                          className="view-offer"
                          onClick={() => {
                            setVisible({
                              ...visible,

                              2: !visible[2],
                            });
                          }}
                        >
                          {visible ? "VIEW OFFER" : "VIEW OFFER"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {visible[2] ? (
              <div className={"offer-images"}>
                <img src={Img2} alt="" />
                <img src={Img1} alt="" />
                <img src={Img3} alt="" />
                <img src={Img2} alt="" />
              </div>
            ) : null}
            <div className="single-room-card">
              <div>
                <div className="room-img-slider">
                  {/* <img src={Img2} alt="" /> */}
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <img src={Img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div>
                <div className="room-info-container">
                  <div className="room-name">GRAND SUITE LAGO</div>
                  <div className="room-short-desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <div className="room-row-info">
                    <div className="room-desc-icons">
                      <div className="room-icon">
                        <img src={seaview} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={balcony} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={bath} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={seaview} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={balcony} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={bath} alt="" />
                      </div>
                    </div>
                    <div className="room-price-and-more">
                      <p>
                        <span className="room-normal-text">
                          FROM <br /> €1,280/NIGHT <br />
                        </span>
                        <span className="grey">EXCLUDING TAXES AND FEES</span>
                      </p>
                    </div>
                  </div>

                  <div className="offer">
                    <div>
                      <div className="offer">
                        <button
                          className="view-offer"
                          onClick={() => {
                            setVisible({
                              ...visible,

                              3: !visible[3],
                            });
                          }}
                        >
                          {visible ? "VIEW OFFER" : "VIEW OFFER"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {visible[3] ? (
              <div className={"offer-images"}>
                <img src={Img2} alt="" />
                <img src={Img1} alt="" />
                <img src={Img3} alt="" />
                <img src={Img2} alt="" />
              </div>
            ) : null}
            <div className="single-room-card">
              <div>
                <div className="room-img-slider">
                  {/* <img src={Img2} alt="" /> */}
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <img src={Img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Img1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div>
                <div className="room-info-container">
                  <div className="room-name">GRAND SUITE LAGO</div>
                  <div className="room-short-desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <div className="room-row-info">
                    <div className="room-desc-icons">
                      <div className="room-icon">
                        <img src={seaview} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={balcony} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={bath} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={seaview} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={balcony} alt="" />
                      </div>
                      <div className="room-icon">
                        <img src={bath} alt="" />
                      </div>
                    </div>
                    <div className="room-price-and-more">
                      <p>
                        <span className="room-normal-text">
                          FROM <br /> €1,280/NIGHT <br />
                        </span>
                        <span className="grey">EXCLUDING TAXES AND FEES</span>
                      </p>
                    </div>
                  </div>

                  <div className="offer">
                    <div>
                      <div className="offer">
                        <button
                          className="view-offer"
                          onClick={() => {
                            setVisible({
                              ...visible,

                              4: !visible[4],
                            });
                          }}
                        >
                          {visible ? "VIEW OFFER" : "VIEW OFFER"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {visible[4] ? (
              <div className={"offer-images"}>
                <img src={Img2} alt="" />
                <img src={Img1} alt="" />
                <img src={Img3} alt="" />
                <img src={Img2} alt="" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingSection;
