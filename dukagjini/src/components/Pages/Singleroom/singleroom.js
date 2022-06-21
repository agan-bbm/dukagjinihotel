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
import { format, parse } from "rsuite/esm/utils/dateUtils";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

function Singleroom({ dates, setDates, book, setBook, al }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    child1: 7,
    child2: 7,
    child3: 7,
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
      .catch((err) => console.log);
  }, []);
  useEffect(() => {
    setGuests(parseInt(book.adult) + parseInt(book.children));
  }, [book]);
  var maxPersons = 0;
  if (rooms.isLoaded) {
    maxPersons = rooms.rooms.acf.room.max_persons;
  }
  // console.log;
  // console.log;
  // console.log;

  const getChildrenUnder6 = () => {
    var counter = 0;
    if (parseInt(childAges.child1) <= 6) counter++;
    if (parseInt(childAges.child2) <= 6) counter++;
    if (parseInt(childAges.child3) <= 6) counter++;

    return counter;
  };

  var thirdperson = 0;

  if (guests == 3) {
    thirdperson = 4;
    // console.log;
  }
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
  // console.log, "parseInt(book.children) ");
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
    for (var i = 1; i < 18; i++) {
      ages.push(<option value={i}>{i}</option>);
    }

    return ages;
  };
  const renderChildrenAge1 = () => {
    for (var i = 1; i < 18; i++) {
      ages1.push(<option value={i}>{i}</option>);
    }
    return ages1;
  };
  const renderChildrenAge2 = () => {
    for (var i = 1; i < 18; i++) {
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
  // console.log;
  // console.log;
  // console.log;

  // console.log => e.child1));

  // var newArr = [];

  // console.log;

  const childrensAgeDropdown = (children) => {
    // const newArr = [];

    if (children === "1") {
      return (
        <select
          name="checkin"
          id=""
          defaultValue={7}
          onChange={(e) => {
            // newArr.push(e.target.value);
            setChildAges({ ...childAges, child1: e.target.value });

            // console.log);
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
            defaultValue={7}
            onChange={(e) => {
              // console.log;

              // newArr.push(e.target.value);
              setChildAges({ ...childAges, child1: e.target.value });
            }}
          >
            {renderChildrenAge()}
          </select>
          <select
            name="checkin"
            id=""
            defaultValue={7}
            onChange={(e) => {
              // newArr.push(e.target.value);
              setChildAges({ ...childAges, child2: e.target.value });
              // console.log;
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
            defaultValue={7}
            onChange={(e) => {
              // newArr.push(e.target.value);
              setChildAges({ ...childAges, child1: e.target.value });
            }}
          >
            {renderChildrenAge()}
          </select>
          <select
            name="checkin"
            id=""
            defaultValue={7}
            onChange={(e) => {
              // newArr.push(e.target.value);
              setChildAges({ ...childAges, child2: e.target.value });
            }}
          >
            {renderChildrenAge1()}
          </select>
          <select
            name="checkin"
            id=""
            defaultValue={7}
            onChange={(e) => {
              // newArr.push(e.target.value);
              setChildAges({ ...childAges, child3: e.target.value });
            }}
          >
            {renderChildrenAge2()}
          </select>
        </>
      );
    }
  };
  // console.log;
  // console.log;
  // console.log;
  // console.log;
  // console.log;

  const calcPrice = (çmimi) => {
    const secondperson =
      book.adult > 1 ? parseInt(rooms.rooms.acf.room.secondperson) : 0;
    const thirdperson =
      book.adult >= 3 ? parseInt(rooms.rooms.acf.room.thirdperson) : 0;
    const fourthperson =
      book.adult >= 4 ? parseInt(rooms.rooms.acf.room.fourthperson) : 0;
    if (parseInt(book.children) > 0) {
      return nights === 0
        ? çmimi
        : parseInt(çmimi) +
            secondperson * nights +
            thirdperson * nights +
            fourthperson * nights +
            20 * (book.children - getChildrenUnder6()) * nights +
            "€";
    } else {
      return nights === 0
        ? çmimi
        : parseInt(çmimi) +
            secondperson * nights +
            thirdperson * nights +
            fourthperson * nights +
            "€";
    }
  };

  const returnPrice = () => {
    if (rooms.isLoaded) {
      const datenewprice = new Date(
        formatDate(rooms.rooms.acf.room.datenewprice)
      );
      console.log(datenewprice);
      const dateendprice = new Date(
        formatDate(rooms.rooms.acf.room.dateendprice)
      );
      console.log(dateendprice);

      var çmimi = rooms.rooms.acf.room.room_price;
      console.log(çmimi);
      //FROM OUTSIDE TO INSIDE OFFER
      if (
        formatDate(book.checkin) < formatDate(datenewprice) &&
        formatDate(book.checkout) <= formatDate(dateendprice) &&
        formatDate(book.checkout) > formatDate(datenewprice)
      ) {
        console.log("PREJ JASHT MRENA");
        const offerdays = Math.abs(dateendprice - datenewprice);
        const offerdayscount = Math.ceil(offerdays / (1000 * 60 * 60 * 24)); //2
        console.log(offerdayscount);

        const newdiffTime = Math.abs(datenewprice - book.checkin);
        const daysWithOffer = Math.ceil(newdiffTime / (1000 * 60 * 60 * 24)); //1
        console.log(daysWithOffer);

        const normalprice =
          daysWithOffer * parseInt(rooms.rooms.acf.room.room_price); //2-1=1*80
        console.log(normalprice);

        const outofoffer = Math.abs(book.checkout - datenewprice);
        const outofoffercount =
          Math.ceil(outofoffer / (1000 * 60 * 60 * 24)) - 1; //2
        console.log(outofoffercount);

        const offerPrice =
          outofoffercount * parseInt(rooms.rooms.acf.room.newprice); //2*50
        console.log(offerPrice);

        çmimi = offerPrice + normalprice;
        console.log(çmimi);
        return calcPrice(çmimi);
      }
      //FROM INSIDE OFFER TO OUTSIDE
      if (
        formatDate(book.checkin) >= formatDate(datenewprice) &&
        formatDate(book.checkin) < formatDate(dateendprice) &&
        formatDate(book.checkout) > formatDate(dateendprice)
      ) {
        console.log("PREJ MRENA JASTH");

        const offerdays = Math.abs(dateendprice - datenewprice);
        const offerdayscount = Math.ceil(offerdays / (1000 * 60 * 60 * 24)); //2
        console.log(offerdayscount);

        const newdiffTime = Math.abs(book.checkin - datenewprice);
        const daysWithOffer =
          Math.ceil(newdiffTime / (1000 * 60 * 60 * 24)) - 1; //1
        console.log(daysWithOffer);

        const pricenewoffer =
          (offerdayscount - daysWithOffer) *
          parseInt(rooms.rooms.acf.room.newprice); //2-1=1*80
        console.log(pricenewoffer);

        const outofoffer = Math.abs(book.checkout - dateendprice);
        const outofoffercount =
          Math.ceil(outofoffer / (1000 * 60 * 60 * 24)) - 1; //2
        console.log(outofoffercount);

        const normalPrice =
          outofoffercount * parseInt(rooms.rooms.acf.room.room_price); //2*50
        console.log(normalPrice);

        çmimi = pricenewoffer + normalPrice;
        return calcPrice(çmimi);
        console.log(çmimi);
      }
      //FROM INSIDE OFFER TO INSIDE OFFER
      if (
        formatDate(book.checkin) >= formatDate(datenewprice) &&
        formatDate(book.checkin) < formatDate(dateendprice) &&
        formatDate(book.checkout) <= formatDate(dateendprice)
      ) {
        console.log("QETASH VEQ MRENA JE");
        const newdiffTime = Math.abs(dateendprice - datenewprice);
        const daysWithOffer = Math.ceil(newdiffTime / (1000 * 60 * 60 * 24));

        const userdiffStart = Math.abs(book.checkin - datenewprice);
        const daysWithOfferend = Math.ceil(
          userdiffStart / (1000 * 60 * 60 * 24)
        );
        console.log(daysWithOfferend);
        const userdiffEnd = Math.abs(dateendprice - book.checkout);
        const daysWithOfferstart = Math.ceil(
          userdiffEnd / (1000 * 60 * 60 * 24)
        );
        console.log(daysWithOfferstart);

        const daysWithOfferCalc =
          parseInt(daysWithOfferend) - 1 + parseInt(daysWithOfferstart) - 1;
        console.log(daysWithOffer);

        çmimi =
          parseInt(rooms.rooms.acf.room.newprice) * daysWithOffer -
          daysWithOfferCalc;

        return calcPrice(çmimi);
        console.log(çmimi);
      }

      //FROM OUTSIDE TO OUTSIDE OFFER
      if (
        formatDate(book.checkin) < formatDate(datenewprice) &&
        formatDate(book.checkout) > formatDate(dateendprice)
      ) {
        console.log("PI JASHT JASTH APET");
        const newdiffTime = Math.abs(dateendprice - datenewprice);
        const daysWithOffer = Math.ceil(newdiffTime / (1000 * 60 * 60 * 24));

        const userdiffTime = Math.abs(book.checkout - book.checkin);
        const userdiffDays = Math.ceil(userdiffTime / (1000 * 60 * 60 * 24));

        const daysWithoutOffer =
          parseInt(userdiffDays) - parseInt(daysWithOffer);

        çmimi =
          daysWithoutOffer * parseInt(rooms.rooms.acf.room.room_price) +
          daysWithOffer * parseInt(rooms.rooms.acf.room.newprice);

        return calcPrice(çmimi);
        console.log(çmimi);
      }
      //VEQ OUTSIDE
      if (
        formatDate(book.checkout) <= formatDate(datenewprice) ||
        formatDate(book.checkin) >= formatDate(dateendprice)
      ) {
        const newdiffTime = Math.abs(book.checkout - book.checkin);
        const daysWithOffer = Math.ceil(newdiffTime / (1000 * 60 * 60 * 24));
        çmimi = parseInt(rooms.rooms.acf.room.room_price) * daysWithOffer;
        console.log(çmimi);
        return calcPrice(çmimi);
        console.log("VEQ OUTSIDE JE");
      }
    }
  };

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
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              {!al ? (
                <img src={rooms.rooms.acf.room.images[0]} alt="" />
              ) : (
                <img src={rooms.rooms.acf.roomal.images[0]} alt="" />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {!al ? (
                <img src={rooms.rooms.acf.room.images[1]} alt="" />
              ) : (
                <img src={rooms.rooms.acf.roomal.images[1]} alt="" />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {!al ? (
                <img src={rooms.rooms.acf.room.images[2]} alt="" />
              ) : (
                <img src={rooms.rooms.acf.room.images[2]} alt="" />
              )}
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              {!al ? (
                <img src={rooms.rooms.acf.room.images[0]} alt="" />
              ) : (
                <img src={rooms.rooms.acf.roomal.images[0]} alt="" />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {!al ? (
                <img src={rooms.rooms.acf.room.images[1]} alt="" />
              ) : (
                <img src={rooms.rooms.acf.roomal.images[1]} alt="" />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {!al ? (
                <img src={rooms.rooms.acf.room.images[2]} alt="" />
              ) : (
                <img src={rooms.rooms.acf.room.images[2]} alt="" />
              )}
            </SwiperSlide>
          </Swiper>
          {/* <div
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
          </div> */}
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
              <p
                style={{
                  fontStyle: "italic",
                  color: "#575757",
                  fontSize: "13px",
                }}
              >
                {rooms.rooms.acf.room.shtrati_portativ}
              </p>
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
                          // console.log;
                          setReservation({
                            ...reservation,
                            adult: e.target.value,
                            children:
                              parseInt(e.target.value) === parseInt(maxPersons)
                                ? 0
                                : book.children,
                          });
                          setBook({
                            ...book,
                            adult: e.target.value,

                            children:
                              // parseInt(e.target.value) === parseInt(maxPersons)
                              //   ? 0
                              //   : book.children
                              0,
                            guests:
                              parseInt(reservation.adult) +
                              parseInt(reservation.children),
                          });
                          setChildAges({ child1: "", child2: "", child3: "" });

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
                        value={book.children}
                        defaultValue={book.children}
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
                          });
                          // setGuests(
                          //   parseInt(book.adult) + parseInt(book.children)
                          // );
                        }}
                      >
                        <option value={0}>0</option>;{renderChildrenOptions()}
                      </select>
                    </div>
                  </div>
                  {parseInt(book.children) > 0 ? (
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
                    <p className="l-price">Total Price</p>

                    <p className="l-price">
                      {/* {nights === 0
                        ? rooms.rooms.acf.room.room_price
                        : parseInt(rooms.rooms.acf.room.room_price) *
                            nights *
                            (guests - getChildrenUnder6()) +
                          "€"} */}

                      {returnPrice()}
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
                            parseInt(guests) - parseInt(getChildrenUnder6()),
                          price: returnPrice(),
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
  ) : null;
}
export default Singleroom;
