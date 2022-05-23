import axios from "axios";
import React, { useState } from "react";
import "./UpdateReservation/updateReservation.css";

function DeleteReservation() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [idError, setIdError] = useState({
    errorId: true,
    id: "",
  });

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
    f.append("ReservationId", idError.id);

    axios
      .post(
        "https://cmsdukagjini.blackbird.marketing/wp-content/deleteReservation.php",
        f
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main-update">
      <h1 className="update-title">
        Enter reservation ID to cancel reservation
      </h1>
      <form className="update-form">
        <input
          type="text"
          placeholder="Enter reservetion ID"
          required
          maxLength={5}
          minLength={5}
          onChange={(e) => {
            validateId(e.target.value);
          }}
        />
        {!idError.errorId ? (
          <p className="update-error">
            Please write 5 digits of the ID. <br></br>ID should contain only
            numbers!
          </p>
        ) : (
          ""
        )}
        <button
          formTarget="dummyframe"
          onClick={() => {
            handleSubmit();
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
    </div>
  );
}

export default DeleteReservation;
