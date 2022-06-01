import React, { useEffect, useState } from "react";
import "./singleroom.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import fullrightimg from "../../../images/fullrightimg.png";
import lefttopimg from "../../../images/lefttopimg.png";
import leftbottomimg from "../../../images/leftbottomimg.png";
import livingroom from "../../../images/user.svg";
import bath from "../../../images/bed.svg";
import seaview from "../../../images/dashboard.svg";
import balcony from "../../../images/wifi.svg";
import dateIcon from "../../../images/Date_fill.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { parse } from "rsuite/esm/utils/dateUtils";

function Singleroom({ dates, setDates, book, setBook, al }) {
  const params = useParams();
  const [popup, setPopup] = useState({
    isOpen: false,
    photoIndex: 0,
  });

  const [reservation, setReservation] = useState({
    adult: 1,
    children: 0,
  });
  const [guests, setGuests] = useState(1);
  const [childAges, setChildAges] = useState({
    ages: [],
  });

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
  useEffect(() => {
    setGuests(parseInt(book.adult) + parseInt(book.children));
  }, [book]);
  var maxPersons = 0;
  if (rooms.isLoaded) {
    maxPersons = rooms.rooms.acf.room.max_persons;
  }
  // console.log(guests);
  // console.log(book);

  const maxPPl = 4;
  const People = () => {
    for (var i = 1; i <= maxPPl; i++) {
      return <option value={i}>{i}</option>;
    }
  };
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

  let adultList = [];
  let childList = [];
  let ages = [];
  let ages1 = [];
  let ages2 = [];
  const renderChildrenOptions = () => {
    for (var i = 1; i <= maxPersons - reservation.adult; i++) {
      childList.push(<option value={i}>{i}</option>);
    }

    return childList;
  };
  const renderAdultOptions = () => {
    for (var i = 1; i <= maxPersons; i++) {
      adultList.push(<option value={i}>{i}</option>);
    }
    return adultList;
  };
  const renderChildrenAge = () => {
    for (var i = 1; i <= 18; i++) {
      ages.push(<option value={i}>{i}</option>);
    }

    return ages;
  };
  const renderChildrenAge1 = () => {
    for (var i = 1; i <= 18; i++) {
      ages1.push(<option value={i}>{i}</option>);
    }
    return ages1;
  };
  const renderChildrenAge2 = () => {
    for (var i = 1; i <= 18; i++) {
      ages2.push(<option value={i}>{i}</option>);
    }
    return ages2;
  };
  const diffTime = Math.abs(book.checkout - book.checkin);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const images = [
    rooms.isLoaded ? rooms.rooms.acf.room.images[0] : "",
    rooms.isLoaded ? rooms.rooms.acf.room.images[1] : "",

    rooms.isLoaded ? rooms.rooms.acf.room.images[2] : "",
  ];
  console.log("---------------------------------");
  console.log(childAges);
  console.log("---------------------------------");

  // console.log(childAges.filter((e) => e.child1));
  for (var i = 0; i < childAges.ages.length; i++) {
    // console.log(childAges.ages[i]);
  }

  const childrensAgeDropdown = (children) => {
    if (children === "1") {
      return (
        <select
          name="checkin"
          id=""
          onChange={(e) => {
            setChildAges({ ...childAges, ages: [...ages, e.target.value] });
          }}
        >
          {renderChildrenAge()}
        </select>
      );
    } else if (children === "2") {
      return (
        <>
          <select
            name="checkin"
            id=""
            onChange={(e) => {
              childages.push(e.target.value);
              setChildAges({ ...childAges, ages: [...ages, e.target.value] });
            }}
          >
            {renderChildrenAge()}
          </select>
          <select
            name="checkin"
            id=""
            onChange={(e) => {
              childages.push(e.target.value);

              setChildAges({ ...childAges, ages: [...ages, e.target.value] });
            }}
          >
            {renderChildrenAge1()}
          </select>
        </>
      );
    } else if (book.children) {
      return (
        <>
          <select
            name="checkin"
            id=""
            onChange={(e) => {
              setChildAges({ ...childAges, ages: [...ages, e.target.value] });
            }}
          >
            {renderChildrenAge()}
          </select>
          <select
            name="checkin"
            id=""
            onChange={(e) => {
              setChildAges({ ...childAges, ages: [...ages, e.target.value] });
            }}
          >
            {renderChildrenAge1()}
          </select>
          <select
            name="checkin"
            id=""
            onChange={(e) => {
              setChildAges({ ...childAges, ages: [...ages, e.target.value] });
            }}
          >
            {renderChildrenAge2()}
          </select>
        </>
      );
    }
  };
  // console.log(guests);
  // console.log("ADULT: ", book.adult);
  // console.log("MAXPERSONS", parseInt(maxPersons));
  // console.log("RESERVATION", reservation);
  var childages = [];

  return rooms.isLoaded ? (
    <>
      <div className="single-room-page">
        <div className="containerWrapper">
          {popup.isOpen && (
            <Lightbox
              mainSrc={images[popup.photoIndex]}
              nextSrc={images[(popup.photoIndex + 1) % images.length]}
              prevSrc={
                images[(popup.photoIndex + images.length - 1) % images.length]
              }
              onCloseRequest={() => setPopup({ ...popup, isOpen: false })}
              onMovePrevRequest={() =>
                setPopup({
                  ...popup,
                  photoIndex:
                    (popup.photoIndex + images.length - 1) % images.length,
                })
              }
              enableZoom={false}
              onMoveNextRequest={() =>
                setPopup({
                  ...popup,
                  photoIndex: (popup.photoIndex + 1) % images.length,
                })
              }
            />
          )}

          <div
            className="single-room-grid"
            onClick={() => {
              setPopup({ ...popup, isOpen: true });
            }}
          >
            <div className="grid-left-side">
              {!al ? (
                <img src={rooms.rooms.acf.room.images[0]} alt="" />
              ) : (
                <img src={rooms.rooms.acf.roomal.images[0]} alt="" />
              )}
            </div>
            <div className="grid-right-side">
              <div className="rightside-div">
                {!al ? (
                  <img src={rooms.rooms.acf.room.images[1]} alt="" />
                ) : (
                  <img src={rooms.rooms.acf.roomal.images[1]} alt="" />
                )}
              </div>
              <div className="rightside-div">
                {!al ? (
                  <img src={rooms.rooms.acf.room.images[2]} alt="" />
                ) : (
                  <img src={rooms.rooms.acf.room.images[2]} alt="" />
                )}
              </div>
            </div>
          </div>
          <div className="title-and-location">
            <h2 className="single-room-title">{rooms.rooms.acf.room.name}</h2>
            {!al ? (
              <p id="lokacioni-dhomes">Peja, Kosovo</p>
            ) : (
              <p id="lokacioni-dhomes">Pejë, Kosovë</p>
            )}
          </div>

          <div className="single-room-informations">
            <div className="sr-info-left">
              {!al ? (
                <p className="single-room-description">Description</p>
              ) : (
                <p className="single-room-description">Përshkrimi</p>
              )}

              {!al ? (
                <p className="pershkrimi-p">{rooms.rooms.acf.room.longdesc}</p>
              ) : (
                <p className="pershkrimi-p">
                  {rooms.rooms.acf.roomal.longdesc}
                </p>
              )}
              <div className="room-features-wrapper">
                {!al ? (
                  <p className="room-features-p">Room Features</p>
                ) : (
                  <p className="room-features-p">Veçoritë e dhomës</p>
                )}

                <div className="ikonat-single-room">
                  <div className="icon-info" id="single-room-iconinfo1">
                    {!al
                      ? rooms.rooms.acf.room.icons
                        ? rooms.rooms.acf.room.icons.map((icons) => (
                            <div className="icon-singleroom-page">
                              <img src={icons.icon} alt="" />

                              <p>{icons.text}</p>
                            </div>
                          ))
                        : ""
                      : rooms.rooms.acf.roomal.icons
                      ? rooms.rooms.acf.roomal.icons.map((icons) => (
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
                  {!al ? <span>/Night</span> : <span>/Natë</span>}
                </p>
                <hr />
                <div className="date-inputs">
                  <div className="sr-dates-flex">
                    <div className="select-dates">
                      <label htmlFor="checkin">Check In Date</label>

                      <p className="sr-dates-txt">
                        <img src={dateIcon} /> {formatDate(book.checkin)}
                      </p>
                    </div>
                    <div className="select-dates">
                      <label htmlFor="checkin">Check out Date</label>

                      <p className="sr-dates-txt">
                        <img src={dateIcon} /> {formatDate(book.checkout)}
                      </p>
                    </div>
                  </div>

                  <div className="sr-selects-flex">
                    <div className="select-dates select">
                      {!al ? (
                        <label htmlFor="checkin">Adult</label>
                      ) : (
                        <label htmlFor="checkin">Të rritur</label>
                      )}

                      <select
                        name="checkin"
                        id=""
                        value={book.adult}
                        onChange={(e) => {
                          // console.log(reservation);
                          setReservation({
                            ...reservation,
                            adult: e.target.value,
                            children:
                              e.target.value === "4" ? 0 : book.children,
                          });
                          setBook({
                            ...book,
                            adult: e.target.value,

                            children:
                              e.target.value === "4" ? 0 : book.children,
                            guests:
                              parseInt(reservation.adult) +
                              parseInt(reservation.children),
                          });
                          setGuests(
                            parseInt(reservation.adult) +
                              parseInt(reservation.children)
                          );
                          // if (parseInt(maxPersons) === parseInt(book.adult)) {
                          //   setBook({ ...book, children: 0 });
                          // }
                        }}
                      >
                        {renderAdultOptions()}
                      </select>
                    </div>
                    <div className="select-dates select">
                      {!al ? (
                        <label htmlFor="checkin">Children</label>
                      ) : (
                        <label htmlFor="checkin">Fëmijë</label>
                      )}
                      <select
                        name="checkin"
                        id=""
                        // value={book.children}
                        // defaultChecked={{ label: 0, value: 0 }}
                        onChange={(e) => {
                          setReservation({
                            ...reservation,
                            children: e.target.value,
                          });
                          setBook({
                            ...book,
                            children: e.target.value,
                            guests:
                              parseInt(reservation.adult) +
                              parseInt(reservation.children),
                          });
                          setGuests(
                            parseInt(book.adult) + parseInt(book.children)
                          );
                        }}
                      >
                        <option value={0}>0</option>;{renderChildrenOptions()}
                      </select>
                    </div>
                  </div>
                  {book.children > 0 ? (
                    <div className="sr-selects-flex">
                      <div className="select-dates select childrensAge">
                        {!al ? (
                          parseInt(book.children) > 1 ? (
                            <label htmlFor="checkin">Age of Children’s</label>
                          ) : (
                            <label htmlFor="checkin">Age of Child</label>
                          )
                        ) : parseInt(book.children) > 1 ? (
                          <label htmlFor="checkin">Mosha e fëmijëve</label>
                        ) : (
                          <label htmlFor="checkin">Mosha e fëmiut</label>
                        )}

                        <div className="childrens-age-dropdowns">
                          {childrensAgeDropdown(book.children)}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="price-wrapper">
                  <div className="price-single-page">
                    <p className="total">Total</p>
                    <p className="total-price">
                      {nights === 0
                        ? rooms.rooms.acf.room.room_price
                        : parseInt(rooms.rooms.acf.room.room_price) *
                            nights *
                            guests +
                          "€"}
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
                          longRoomName: rooms.rooms.acf.room.name,
                          nights: nights,
                          guests:
                            parseInt(reservation.adult) +
                            parseInt(reservation.children),
                          price:
                            parseInt(rooms.rooms.acf.room.room_price) *
                            nights *
                            guests,
                        });
                      }}
                    >
                      {!al ? (
                        <button className="default-button">Book</button>
                      ) : (
                        <button className="default-button">Rezervo</button>
                      )}
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
