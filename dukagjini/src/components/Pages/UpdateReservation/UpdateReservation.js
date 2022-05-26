import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router-dom";

import "./updateReservation.css";

function UpdateReservation({ book }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [idError, setIdError] = useState({
    errorId: true,
    id: "",
  });
  const [email, setEmail] = useState("");
  console.log(idError.errorId);
  const validateId = (id) => {
    const idRegex = new RegExp("^[+]*[(]{0,1}[0-9_ ]{5,25}[)]{0,1}[-s./0-9]*$");

    if (idRegex.test(id) === false) {
      setIdError({ ...idError, errorId: false, id: id });
    } else {
      setIdError({ ...idError, errorId: true, id: id });
    }
  };

  const onChange = (date) => {
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
    console.log(start);
    console.log(end);
  };
  const todayDate = Date.now();
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
  console.log(startDate);
  const handleSubmit = (e) => {
    const f = new FormData();
    f.append("CheckInDate", formatDate(startDate));
    f.append("CheckOutDate", formatDate(endDate));
    f.append("ReservationId", idError.id);

    axios
      .post(
        "https://cmsdukagjini.blackbird.marketing/wp-content/updateReservation.php",
        f
      )
      .then((res) => {
        console.log(res);
        document.getElementById("editReservationEmail").click();
        window.location.href = window.location.origin + "/";
      })
      .catch((err) => {
        console.log(err);
        window.location.href = window.location.origin + "/error";
      });
  };
  console.log(idError);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("reservationId");
  const emailUrl = new URLSearchParams(search).get("email");
  const price = new URLSearchParams(search).get("price");
  const roomName = new URLSearchParams(search).get("roomName");
  const children = new URLSearchParams(search).get("children");
  const adults = new URLSearchParams(search).get("adults");
  const nights = new URLSearchParams(search).get("nights");
  console.log(emailUrl);

  return (
    <div className="main-update">
      <h1 className="update-title">Update dates below to update reservation</h1>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        monthsShown={2}
        selectsRange
        inline
        minDate={todayDate}
      />

      <form className="update-form">
        <input
          type="hidden"
          placeholder="Your email address"
          required
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
          value={emailUrl}
        />
        <br></br>
        <input
          type="hidden"
          placeholder="Enter reservetion ID"
          required
          // onChange={(e) => {
          //   validateId(e.target.value);
          // }}
          value={id}
        />
        {/* {!idError.errorId ? (
          <p className="update-error">ID should contain only numbers!</p>
        ) : (
          ""
        )} */}
        <button
          formTarget="dummyframe"
          // disabled={idError.errorId === false}
          onClick={() => {
            if (
              idError.errorId === false ||
              startDate === null ||
              endDate === null ||
              email.length === 0
            ) {
              console.log("mushi");
            } else {
              handleSubmit();
            }
          }}
        >
          Update
        </button>
      </form>
      <iframe
        name="dummyframe"
        style={{ display: "none", width: "0", height: "0" }}
        title="dummyframe"
      ></iframe>
      <form
        method="POST"
        action="https://cmsdukagjini.blackbird.marketing/wp-content/sendEmailReservation.php"
        // style={{ display: "none" }}
      >
        <input type="text" name="email" value={emailUrl} />
        <input type="text" name="CheckInDate" value={startDate} />
        <input type="text" name="CheckOutDate" value={endDate} />
        <input type="text" name="type" value="edit" />
        <input type="text" name="ReservationId" value={id} />
        <input type="text" name="roomName" value={roomName} />
        <input type="text" name="nights" value={nights} />
        <input type="text" name="adults" value={adults} />
        <input type="text" name="children" value={children} />
        <input type="text" name="price" value={price} />
        <button formTarget="sendEmail" id="editReservationEmail">
          submit
        </button>
      </form>
      <iframe name="sendEmail" style={{ display: "none" }} />
    </div>
  );
}

export default UpdateReservation;
