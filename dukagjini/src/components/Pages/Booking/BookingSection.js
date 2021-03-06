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
import { addDays, subDays } from "rsuite/esm/utils/dateUtils";

function BookingSection({ dates, setDates, book, setBook, al, posts }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const todayDate = new Date();

  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  const [loader, setLoader] = useState(false);

  const onChange = (date) => {
    const [start, end] = date;
    const diffTime = Math.abs(start - end);
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setStartDate(start);
    setEndDate(end);
    setDates({ ...dates, from: start, to: end });
    setBook({ ...book, checkin: start, checkout: end });
  };

  async function getRooms() {
    await axios
      .get(
        `https://cmsdukagjini.blackbird.marketing/wp-content/fetch.php?fromDate=${formatDate(
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

  const diffTime = Math.abs(endDate - startDate);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log;
  const startblocked = posts.acf.start_blockeddate;
  const endblocked = posts.acf.end_blockeddate;

  // console.log;
  // console.log;

  // console.log;
  return (
    <>
      <div className="booking-container">
        <div className="booking-main">
          <div>
            <div className="select-dates-txt">
              {!al ? (
                <h2 className="range-h2">Select Dates</h2>
              ) : (
                <h2 className="range-h2">Zgjedh Datat</h2>
              )}
              {!al ? (
                <p className="range-p">
                  Book directly with us. Best rates generated.
                </p>
              ) : (
                <p className="range-p">
                  Rezervoni direkt me ne. ??mimet m?? t?? mira t?? krijuara.
                </p>
              )}
            </div>

            <DatePicker
              selected={book.checkin}
              // selectsStart={new Date(book.checkin)}
              // selectsEnd={new Date(book.checkout)}
              selectsRange={true}
              onChange={onChange}
              startDate={book.checkin ? book.checkin : startDate}
              endDate={book.checkout}
              monthsShown={2}
              inline
              minDate={todayDate}
              // excludeDateIntervals={[
              //   { start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
              // ]}
              excludeDateIntervals={[
                {
                  start: subDays(
                    new Date(startblocked ? startblocked : "11/06/2048"),
                    0
                  ),
                  end: addDays(
                    new Date(endblocked ? endblocked : "12/06/2048"),
                    0
                  ),
                },
              ]}
            />
            <div>
              <button
                className="default-button"
                id="check-avl-rooms"
                disabled={
                  nights === 0 || endDate == null || startDate == endDate
                }
                onClick={() => {
                  getRooms();
                  setLoader(true);
                }}
              >
                {al ? "Shiko Dhomat" : "Check Rooms"}
              </button>
            </div>
          </div>

          <Rooms
            freeRooms={rooms}
            loader={loader}
            al={al}
            book={book}
            setBook={setBook}
          />
        </div>
      </div>
    </>
  );
}

export default BookingSection;
