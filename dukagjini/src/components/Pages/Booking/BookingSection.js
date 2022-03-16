import React, { useEffect, useState } from "react";
import axios from "axios";

// CSS
import "../Booking/booking.css";
import { useSearchParams } from "react-router-dom";

function BookingSection() {
  const [dates, setDates] = useState({
    from: null,
    to: null,
  });
  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  const [searchParams, setSearchParams] = useState(null);
  // async function getRooms() {
  //   // console.log(
  //   //   `http://cmsdukagjini.blackbird.marketing/wp-content/fetch.php?fromDate=${dates.from}&toDate=${dates.to}`
  //   // );

  //   await axios
  //     .get(
  //       `http://cmsdukagjini.blackbird.marketing/wp-content/fetch.php?fromDate=${dates.from}&toDate=${dates.to}`,
  //       {
  //         headers: {
  //           "Content-Type": "text/plain",
  //         },
  //       }
  //     )
  //     .then((res) =>
  //       setRooms({
  //         rooms: JSON.parse(res.data),
  //         isLoaded: true,
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // }

  console.log(
    new URLSearchParams(window.location.search).get("rooms"),
    "====="
  );

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
  // console.log("from", dates.from);
  // console.log("to", dates.to);
  var today = new Date().toISOString().split("T")[0];
  // console.log(rooms.rooms);
  return (
    <div className="booking-main">
      <form
        method="GET"
        action="http://cmsdukagjini.blackbird.marketing/wp-content/fetch.php"
      >
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
        {/* <iframe
          name="testIframe"
          style={{ display: "none", width: "0", height: "0" }}
        ></iframe> */}
        <button
          // type="submit"
          formTarget="testIframe"
          onClick={() => {
            // getRooms();
          }}
        >
          Book
        </button>
      </form>
    </div>
  );
}

export default BookingSection;
