import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Thankyou from "../Thankyou/Thankyou";
import "./checkout.css";
// import { Addresses } from "./addresses";
import { Summary } from "./summary";
import { Userdetails } from "./userdetails";

function Checkout({ posts, book, setBook }) {
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
    nameValid: true,
    lastNameValid: true,
    numberValid: true,
  });
  const [reservationId, setReservationId] = useState("");
  const [page, setPage] = useState(0);
  console.log(book);

  const showForm = () => {
    switch (page) {
      case 0:
        return <Userdetails formData={formData} setFormData={setFormData} />;
      case 1:
        return (
          <Summary
            posts={posts[0].acf.checkout.secondtstep}
            book={book}
            setBook={setBook}
          />
        );

      case 2:
        return <Thankyou posts={posts[0].acf.checkout.thankyou} />;
    }
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
            <h2>{posts[0].acf.checkout.firststep.heading}</h2>
            <p>{posts[0].acf.checkout.firststep.paragraph}</p>
          </>
        );
      case 1:
        return (
          <>
            {" "}
            <h2>{posts[0].acf.checkout.secondtstep.heading}</h2>
            <p>{posts[0].acf.checkout.secondtstep.paragraph}</p>
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

  console.log(book);
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
        console.log(res);
        setReservationId(res.data);
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(reservationId.slice(0, -1));
  return (
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
    </>
  );
}
export default Checkout;
