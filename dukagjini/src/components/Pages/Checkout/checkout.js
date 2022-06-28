import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Thankyou from "../Thankyou/Thankyou";
import "./checkout.css";
// import { Addresses } from "./addresses";
import { Summary } from "./summary";
import { Userdetails } from "./userdetails";

function Checkout({ posts, book, setBook, al }) {
  const params = useParams();
  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  useEffect(() => {
    axios
      .get(
        "https://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/Rooms/" +
          params.id
      )
      .then((res) => {
        setRooms({
          ...rooms,
          rooms: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log;
  fetch("https://cmsdukagjini.blackbird.marketing/wp-json/jwt-auth/v1/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      username: "Admin",
      password: "blackbird",
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      // console.log;
      localStorage.setItem("jwt", user.token);
    });
  // const headers = {

  // };

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    product: [],
    number: "",
    // email: localStorage.getItem("email"),
    accepted: false,
    connections: {},
    mailError: true,
    image: [],
    nameValid: true,
    lastNameValid: true,
    numberValid: true,
    room_name: "",
    message: "",
  });

  const [reservationId, setReservationId] = useState("");
  const [page, setPage] = useState(0);
  console.log(book);
  const [bookingData, setBookingData] = useState({
    title: "New Reservation",
    content: "",
    status: "pending",
    acf: {
      price: book.price,
      room_name: book.roomName,
      startdate: book.checkin,
      enddate: book.checkout,

      details: {
        firstname: formData.name,
        lastname: formData.lastName,
        email: formData.email,
        phone: formData.number,
        message: formData.message,
      },

      persons: {
        adults: book.adult.toString(),
        childrenunder6: book.children.toString(),
        childrenover6: book.children.toString(),
        guests: book.guests.toString(),
      },
    },
  });
  const showForm = () => {
    switch (page) {
      case 0:
        return (
          <Userdetails
            formData={formData}
            setFormData={setFormData}
            reservationId={reservationId}
            al={al}
            book={book}
            CreateBooking={CreateBooking}
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        );
      case 1:
        return (
          <Summary
            posts={
              !al
                ? posts.acf.checkout.secondtstep
                : posts.acf.checkout.secondtstep
            }
            book={book}
            setBook={setBook}
            al={al}
          />
        );

      case 2:
        return <Thankyou posts={posts.acf.checkout.thankyou} />;
    }
  };
  console.log(process.env.REACT_APP_ACCESS_TOKEN);
  const CreateBooking = () => {
    fetch("https://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/booking", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY21zZHVrYWdqaW5pLmJsYWNrYmlyZC5tYXJrZXRpbmciLCJpYXQiOjE2NTYwNTY4MzQsIm5iZiI6MTY1NjA1NjgzNCwiZXhwIjoxNjU2NjYxNjM0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.bhITNBryPY-mFqsJJqCwHxqLX-OTwEzFrbtxPntQUEI",
      },
      body: JSON.stringify(bookingData),
    });
    // .post(
    //   "https://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/booking",
    //   bookingData,
    //   headers:
    // )
    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (post) {
    //   console.log;
    // });
  };
  const [style, setStyle] = useState("cont");
  const changeStyle = () => {
    setStyle("none");
  };

  const showDesc = () => {
    switch (page) {
      case 0:
        return (
          <>
            {" "}
            <h2>{al ? "Të dhënat e konsumatorit" : "Customer Details"}</h2>
            <p>{posts.acf.checkout.firststep.paragraph}</p>
          </>
        );
      case 1:
        return (
          <>
            {" "}
            <h2>{posts.acf.checkout.secondtstep.heading}</h2>
            <p>{posts.acf.checkout.secondtstep.paragraph}</p>
          </>
        );
      case 2:
        return (
          <>
            {" "}
            {/* <h2>Summary</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc ut <br></br>labore et dolore magna aliqua. Ut
              enim ad minim veniam,Lorem ipsum dolor sit ame.
            </p> */}
          </>
        );
    }
  };
  const [required, setRequired] = useState(false);
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

  const handleSubmit = (e) => {
    const f = new FormData();
    f.append("Guests", book.guests);
    f.append("Adults", book.adult);
    f.append("Children", book.children);
    f.append("CheckInDate", formatDate(book.checkin));
    f.append("CheckOutDate", formatDate(book.checkout));
    f.append("RoomName", book.roomName);

    axios
      .post(
        "https://cmsdukagjini.blackbird.marketing/wp-content/reservation.php",
        f
      )
      .then((res) => {
        // console.log;
        setReservationId(res.data);
        document.getElementById("confirmReservationEmail").click();

        setPage(page + 1);
      })
      .catch((err) => {
        window.location.href = window.location.origin + "/error";
      });
  };

  return rooms.isLoaded ? (
    <>
      <div className="checkout">
        {showDesc()}
        {showForm()}
        {required ? (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Ju lutem plotësoni të gjitha fushat në mënyrë të saktë!
          </p>
        ) : (
          ""
        )}

        <div
          className="checkout-btns"
          style={{
            display: page === 2 ? "none" : "flex",
          }}
        >
          <button
            disabled={
              formData.accepted === false ||
              formData.name === "" ||
              formData.lastName === "" ||
              formData.email === "" ||
              formData.number === "" ||
              !formData.numberValid ||
              !formData.nameValid ||
              !formData.lastNameValid ||
              !formData.mailError
            }
            id="finalBtn"
            className="form-button "
            type="submit"
            onClick={() => {
              // if (page === 2) {
              //   window.location = "/";
              // } else {
              //   setPage(page + 1);
              // }

              if (
                formData.name === "" ||
                formData.lastName === "" ||
                formData.email === "" ||
                formData.number === ""
              ) {
                setRequired(true);
              } else {
                setRequired(false);
                if (page === 1) {
                  handleSubmit();
                  localStorage.removeItem("checkout");
                  localStorage.removeItem("children");
                  localStorage.removeItem("adult");
                  localStorage.removeItem("checkin");
                  localStorage.removeItem("roomName");
                  CreateBooking();
                } else {
                  setPage(page + 1);
                }
              }
            }}
          >
            Continue
          </button>

          <button
            className="back-button default-button"
            onClick={() => {
              if (page === 0) {
                window.location = "/booking";
              } else {
                setPage(page - 1);
              }
            }}
          >
            Back
          </button>
        </div>
      </div>
      <form
        method="POST"
        action="https://cmsdukagjini.blackbird.marketing/wp-content/sendEmailReservation.php"
        style={{ display: "none" }}
      >
        <input type="text" name="name" value={formData.name} />
        <input type="text" name="lastName" value={formData.lastName} />
        <input type="text" name="number" value={formData.number} />

        <input type="text" name="email" value={formData.email} />
        <input type="text" name="message" value={formData.message} />

        <input
          type="text"
          name="CheckInDate"
          value={formatDate(book.checkin)}
        />
        <input
          type="text"
          name="CheckOutDate"
          value={formatDate(book.checkout)}
        />
        {/* <input type="text" name="type" value="create" /> */}

        <input type="text" name="type" value="notify" />
        <input type="text" name="AdminEmail" value="aganhaziri@gmail.com" />
        <input
          type="text"
          name="image"
          value={rooms.rooms.acf.room.images[0]}
        />
        <input type="text" name="roomName" value={book.longRoomName} />
        <input type="text" name="nights" value={book.nights} />
        <input type="text" name="adults" value={book.adult} />
        <input type="text" name="children" value={book.children} />
        <input type="text" name="price" value={book.price} />
        <input
          type="text"
          name="ReservationId"
          value={reservationId.slice(0, -1)}
        />
        <button formTarget="sendEmail" id="confirmReservationEmail">
          submit
        </button>
      </form>
      <iframe name="sendEmail" style={{ display: "none" }} />

      {/* <button
        type="submit"
        onClick={() => {
          CreateBooking();
        }}
      >
        submit booking
      </button> */}
      {/* <form
        method="POST"
        action="https://cmsdukagjini.blackbird.marketing/wp-content/sendBooking.php"
      > */}
    </>
  ) : null;
}
export default Checkout;
