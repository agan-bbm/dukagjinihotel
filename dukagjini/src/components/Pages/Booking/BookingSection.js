import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="booking-container">
        <div className="booking-main">
          {/* <div className="inputs-container">
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
          </div> */}
          {/* <div className="inputs-container">
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
          </div> */}
          {/* <button
            className="booking-mainbutton"
            onClick={() => {
              getRooms();
            }}
          >
            Book
          </button> */}
          <div>
            <Daterange />
            <div>
              <button className="default-button" id="check-avl-rooms">
                Check Rooms
              </button>
            </div>
          </div>
          <Rooms />
        </div>
      </div>
    </>
  );
}

export default BookingSection;
