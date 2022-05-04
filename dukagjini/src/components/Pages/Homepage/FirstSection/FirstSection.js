import React, { useEffect, useState } from "react";

// SLIDER
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "./firstSection.css";
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
function FirstSection({ posts }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    // <div className="hompage-first-section">
    //   <div className="coverImage">
    //     <img src={Img1} />
    //   </div>
    <>
      <div className="firstSection">
        <div className="leftSide">
          <div className="containerWrapper">
            <div className="leftContainer">
              <h2>{posts[2].acf.first.firstheading}</h2>
              <p>{posts[2].acf.first.firstparagraph}</p>
              <button className="default-button"> View our rooms</button>
              <div className="bookingFirstBanner">
                <div className="choosing-option">
                  <label htmlFor="checkin">Check In</label>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} selectsStart startDate={startDate} endDate={endDate} minDate={startDate} />
                </div>
                <div className="choosing-option">
                  <label htmlFor="checkin">Check Out</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    // startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  />
                </div>
                <div className="choosing-option">
                  <div className="select-dates-home select">
                    <label htmlFor="checkin">Adults</label>
                    <select name="checkin" id="">
                      <option value="0">0</option>
                      <option value="1">1</option>

                      <option value="2">2</option>

                      <option value="3">3</option>

                      <option value="4">4</option>

                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className="choosing-option">
                  <div className="select-dates-home select">
                    <label htmlFor="checkin">Children</label>
                    <select name="checkin" id="">
                      <option value="0">0</option>
                      <option value="1">1</option>

                      <option value="2">2</option>

                      <option value="3">3</option>

                      <option value="4">4</option>

                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className="firstButtonRes">
                  <button className="default-button"> Check rooms</button>
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

          <img className="desktopVisibility" src={posts[2].acf.first.firstbannerimg} />

          <img className="tabletVisibility" src={posts[2].acf.first.firstbannerimgtablet} />

          <img className="mobileVisibility" src={posts[2].acf.first.firstbannerimgmobile} />
        </div>
      </div>
    </>
  );
}

export default FirstSection;
