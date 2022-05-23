import React, { useEffect, useState } from "react";
import "./singleroom.css";

import fullrightimg from "../../../images/fullrightimg.png";
import lefttopimg from "../../../images/lefttopimg.png";
import leftbottomimg from "../../../images/leftbottomimg.png";
import livingroom from "../../../images/user.svg";
import bath from "../../../images/bed.svg";
import seaview from "../../../images/dashboard.svg";
import balcony from "../../../images/wifi.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Singleroom({ dates, setDates, book, setBook }) {
  const params = useParams();

  const [reservation, setReservation] = useState({
    adult: 1,
    children: 0,
  });

  const [rooms, setRooms] = useState({
    rooms: [],
    isLoaded: false,
  });
  useEffect(() => {
    axios
      .get(
        "http://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/Rooms/" +
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
    // localStorage.removeItem("adult");
    // localStorage.removeItem("children");
  }, []);
  console.log(book);

  if (rooms.isLoaded) {
    console.log(rooms.rooms.acf.room.short_room_name);
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
    return [year, month, day].join("-");
  };

  const nights =
    parseInt(formatDate(book.checkout).substring(8, 10)) -
    parseInt(formatDate(book.checkin).substring(8, 10));

  return rooms.isLoaded ? (
    <>
      <div className="single-room-page">
        <div className="containerWrapper">
          <div>
            {/* <h2 className="single-room-title">Standard Room</h2> */}
            {/* <h2 style={{ marginBottom: "0px" }} className="single-room-title">
              {rooms.rooms.acf.room.name}
            </h2> */}
          </div>

          {/* <div className="review-single-room">
            <p>Review</p>
          </div> */}

          <div className="single-room-grid">
            <div className="grid-left-side">
              <img src={rooms.rooms.acf.room.images[0]} alt="" />
            </div>
            <div className="grid-right-side">
              <div className="rightside-div">
                <img src={rooms.rooms.acf.room.images[1]} alt="" />
              </div>
              <div className="rightside-div">
                <img src={rooms.rooms.acf.room.images[2]} alt="" />
              </div>
            </div>
          </div>
          <div className="title-and-location">
            <h2 className="single-room-title">{rooms.rooms.acf.room.name}</h2>

            <p id="lokacioni-dhomes">Pejë, Kosove</p>
          </div>

          <div className="single-room-informations">
            <div className="sr-info-left">
              <p className="single-room-description">Përshkrimi</p>
              <p className="pershkrimi-p">{rooms.rooms.acf.room.longdesc}</p>

              <div className="room-features-wrapper">
                <p className="room-features-p">Hotel Features</p>

                <div className="ikonat-single-room">
                  <div className="icon-info" id="single-room-iconinfo1">
                    {rooms.rooms.acf.room.icons
                      ? rooms.rooms.acf.room.icons.map((icons) => (
                          <div className="icon-singleroom-page">
                            <img src={icons.icon} alt="" />

                            <p>{icons.text}</p>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </div>
            <div className="sr-info-right">
              <div className="cart">
                <p className="cmimi-dhomes">
                  {rooms.rooms.acf.room.room_price}
                  <span>/Night</span>
                </p>
                <hr />
                <div className="date-inputs">
                  <div className="sr-dates-flex">
                    <div className="select-dates">
                      <label htmlFor="checkin">Check In Date</label>
                      {/* <input
                        type="date"
                        name="checkin"
                        defaultValue={formatDate(dates.from)}
                      /> */}
                      <p>{formatDate(book.checkin)}</p>
                      {/* <p>{formatDate(dates.from)}</p> */}
                    </div>
                    <div className="select-dates">
                      <label htmlFor="checkin">Check out Date</label>
                      {/* <input
                        type="date"
                        name="checkin"
                        defaultValue={formatDate(dates.to)}
                      /> */}
                      <p>{formatDate(book.checkout)}</p>
                      {/* <p>{formatDate(dates.to)}</p> */}
                    </div>
                  </div>

                  <div className="sr-selects-flex">
                    <div className="select-dates select">
                      <label htmlFor="checkin">Adult</label>
                      <select
                        name="checkin"
                        id=""
                        onChange={(e) => {
                          setReservation({
                            ...reservation,
                            adult: e.target.value,
                          });
                          setBook({
                            ...book,
                            adult: e.target.value,
                          });
                        }}
                      >
                        <option value="1">1</option>

                        <option value="2">2</option>

                        <option value="3">3</option>

                        <option value="4">4</option>

                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="select-dates select">
                      <label htmlFor="checkin">Children</label>
                      <select
                        name="checkin"
                        id=""
                        onChange={(e) => {
                          setReservation({
                            ...reservation,
                            children: e.target.value,
                          });
                          setBook({
                            ...book,
                            children: e.target.value,
                          });
                        }}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>

                        <option value="2">2</option>

                        <option value="3">3</option>

                        <option value="4">4</option>

                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="price-wrapper">
                  <div className="price-single-page">
                    <p className="total">Total</p>
                    <p className="total-price">
                      {parseInt(rooms.rooms.acf.room.room_price) * nights}€
                    </p>
                  </div>
                  <div className="single-page-button">
                    <Link
                      to={"/checkout/" + params.id}
                      onClick={() => {
                        localStorage.setItem(
                          "roomName",
                          rooms.rooms.acf.room.short_room_name
                        );
                        localStorage.setItem("adult", reservation.adult);
                        localStorage.setItem("children", reservation.children);
                        setBook({
                          ...book,
                          roomName: rooms.rooms.acf.room.short_room_name,
                          guests:
                            parseInt(reservation.adult) +
                            parseInt(reservation.children),
                        });
                      }}
                    >
                      <button className="default-button">Book</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <p>sdasdsaads</p>
  );
}
export default Singleroom;
