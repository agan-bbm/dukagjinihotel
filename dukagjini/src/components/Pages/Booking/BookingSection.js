import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";
import "../../Shared/DatePicker/daterange.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

// CSS
import "../Booking/booking.css";
// import "swiper/css";

//images
import Img1 from "../../../images/1.jpg";
import Img2 from "../../../images/2.jpg";
import Img3 from "../../../images/3.jpg";

//icons
import bath from "../../../images/bath.png";
import seaview from "../../../images/seaview.png";
import balcony from "../../../images/balcony.png";
import Daterange from "../../Shared/DatePicker/daterange";
import { Rooms } from "../Rooms";

function BookingSection({ dates, setDates }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  const [loader, setLoader] = useState(false);
  console.log(dates);

  const onChange = (date) => {
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
    setDates({ ...dates, from: start, to: end });
    localStorage.setItem("checkin", start);
    localStorage.setItem("checkout", end);

    // console.log(start);
    // console.log(end);
  };
  async function getRooms() {
    await axios
      .get(
        `http://cmsdukagjini.blackbird.marketing/wp-content/fetch.php?fromDate=${formatDate(
          startDate
        )}&toDate=${formatDate(endDate)}`,
        {}
      )
      .then((res) => {
        setRooms({
          ...rooms,
          rooms: res.data.filter((e) => e.IsFree),
          isLoaded: true,
        });
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }
  // console.log(rooms.rooms.filter((e) => e.IsFree));
  // console.log(startDate);
  // console.log(endDate);

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

  console.log(rooms.rooms);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <>
      <div className="booking-container">
        <div className="booking-main">
          <div>
            <div className="select-dates-txt">
              <h2 className="range-h2">Select Dates</h2>
              <p className="range-p">
                Book directly with us. Best Rates Generated
              </p>
            </div>

            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              monthsShown={2}
              selectsRange
              inline
              // minDate={todayDate}
            />
            <div>
              <button
                className="default-button"
                id="check-avl-rooms"
                onClick={() => {
                  getRooms();
                  setLoader(true);
                  executeScroll();
                }}
              >
                Check Rooms
              </button>
            </div>
          </div>

          <Rooms freeRooms={rooms} loader={loader} ref={myRef} />
        </div>
      </div>
    </>
  );
}

export default BookingSection;
