import React, { useEffect, useState } from "react";

// SLIDER
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "./firstSection.css";
// import { datepickerihome } from "./firstSection.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//IMAGES
import mainimgbanner from "../../../../images/mobile_main_banner.png";
import Img1 from "../../../../images/1.jpg";
import Img2 from "../../../../images/2.jpg";
import Img3 from "../../../../images/3.jpg";
import Img4 from "../../../../images/4.jpg";

import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
function FirstSection({ posts, book, setBook, al }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const todayDate = new Date();
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setBook({ ...book, checkin: start, checkout: end });
    localStorage.setItem("checkin", start);
    localStorage.setItem("checkout", end);
  };
  console.log(book);
  return (
    <>
      <div className="firstSection">
        <div className="leftSide">
          <div className="containerWrapper">
            <div className="leftContainer">
              <h2>{posts.firstheading}</h2>
              <p>{posts.firstparagraph}</p>
              <Link to="/our-rooms">
                <button className="default-button">
                  {al ? "Shiko Dhomat " : "View Our Rooms"}
                </button>
              </Link>

              <div className="bookingFirstBanner">
                <div className="choosing-option">
                  <label htmlFor="checkin">Check In - Check Out</label>
                  <DatePicker
                    // selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    minDate={todayDate}
                  />
                </div>

                <div className="choosing-option">
                  <div className="select-dates-home select">
                    <label htmlFor="checkin">
                      {al ? "Të rritur" : "Adults"}
                    </label>
                    <select
                      name="checkin"
                      id=""
                      onChange={(e) => {
                        localStorage.setItem("adult", e.target.value);
                        setBook({ ...book, adult: e.target.value });
                      }}
                    >
                      <option value="1">1</option>

                      <option value="2">2</option>

                      <option value="3">3</option>

                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
                <div className="choosing-option">
                  <div className="select-dates-home select">
                    <label htmlFor="checkin">
                      {al ? "Fëmijë" : "Children"}
                    </label>
                    <select
                      name="checkin"
                      id=""
                      onChange={(e) => {
                        localStorage.setItem("children", e.target.value);
                        setBook({ ...book, children: e.target.value });
                      }}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>

                      <option value="2">2</option>
                    </select>
                  </div>
                </div>
                <div className="firstButtonRes">
                  <Link to="/Booking">
                    <button id="firstBtnChRooms" className="default-button">
                      {" "}
                      {al ? "Shiko dhomat" : "Check rooms"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          {/* <img
            src={posts[2].acf.first.firstbannerimg}
            srcSet={`${posts[2].acf.first.firstbannerimgmobile} 768w, ${posts[2].acf.first.firstbannerimgtablet} 1240w, ${posts[2].acf.first.firstbannerimg} 1280w`}
          /> */}

          <img className="desktopVisibility" src={posts.firstbannerimg} />

          <img className="tabletVisibility" src={posts.firstbannerimgtablet} />

          <img className="mobileVisibility" src={posts.firstbannerimgmobile} />
        </div>
      </div>
    </>
  );
}

export default FirstSection;
