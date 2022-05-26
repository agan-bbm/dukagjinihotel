import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Rooms } from "./components/Pages/Rooms";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import About from "./components/Shared/Pages/About";
import Booking from "./Pages/Booking";
import Homepage from "./Pages/Homepage";
import axios from "axios";
import Singleroom from "./components/Pages/Singleroom/singleroom";
import Checkout from "./components/Pages/Checkout/checkout";
import Contact from "./components/Pages/Contact/index";
import Thankyou from "./components/Pages/Thankyou/Thankyou";
import { StaticRooms } from "./components/Pages/StaticRooms/StaticRooms";
import ScrollToTop from "./components/Shared/ScrollToTop";
import UpdateReservation from "./components/Pages/UpdateReservation/UpdateReservation";
import DeleteReservation from "./components/Pages/DeleteReservation";
import ReservationError from "./components/Pages/ReservationError";
import Loader2 from "./components/Utils/Loader";
import Al from "./images/AL.svg";
import En from "./images/EN.svg";

console.log(
  "%c Developed by: Black Bird Marketing https://blackbird.marketing",
  "padding:9px 5px; background:black; line-height:25px;color: white"
);
// console.warn = console.error = () => {};

function App() {
  const [state, setState] = useState({
    posts: [],
    isLoaded: false,
  });
  const [al, setAl] = useState(false);
  const [dates, setDates] = useState({ from: "", to: "" });

  const [book, setBook] = useState({
    checkin: "",
    checkout: "",
    adult: 1,
    children: 0,
    roomName: "",
    guests: 1,
    longRoomName: "",
    nights: 1,
    price: 0,
  });
  useEffect(() => {
    axios
      .get("https://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/pages/")
      .then((res) => {
        // console.log(res);
        setState({
          posts: res.data,
          isLoaded: true,
        });
      })

      .catch((err) => console.log(err));

    // axios
    //   .get("https://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/posts")
    //   .then((res) =>
    //     setPeekInside({
    //       inside: res.data,
    //       isLoaded: true,
    //       refresh: 0,
    //     })
    //   )
    //   .catch((err) => console.log(err));
  }, []);

  var homepage, homepageAl, about, aboutAl, rooms, roomsAl;
  state.posts.map((e) => {
    switch (e.id) {
      case 8:
        homepage = e;
        break;
      case 327:
        homepageAl = e;
        break;
      case 61:
        about = e;
        break;
      case 324:
        aboutAl = e;
        break;
      case 44:
        rooms = e;
        break;
      case 329:
        roomsAl = e;
        break;
    }
  });
  console.log("-----------------------------");
  console.log("BOOKING INFOOO", book);
  console.log("-----------------------------");

  console.log(state.posts);

  if (state.isLoaded === false) return <Loader2 />;
  else {
    return (
      <div className="App">
        <ScrollToTop>
          <Navbar al={al} setAl={setAl} />

          <Routes>
            <Route
              path="/"
              exact
              element={
                <Homepage
                  posts={al ? homepageAl : homepage}
                  book={book}
                  setBook={setBook}
                  al={al}
                />
              }
            />
            <Route
              path="/booking"
              element={
                <Booking
                  dates={dates}
                  setDates={setDates}
                  book={book}
                  setBook={setBook}
                  al={al}
                />
              }
            />
            <Route
              path="/about"
              element={<About posts={!al ? about : aboutAl} />}
            />
            {/* <Route path="/rooms" element={<Rooms />} /> */}
            <Route path="our-rooms" element={<StaticRooms al={al} />} />
            <Route
              path="/single-room/:id"
              element={<Singleroom book={book} setBook={setBook} al={al} />}
            />
            <Route
              path="/checkout/:id"
              element={
                <Checkout
                  posts={!al ? about : aboutAl}
                  book={book}
                  setBook={setBook}
                  al={al}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/update-reservation"
              element={<UpdateReservation book={book} />}
            ></Route>
            <Route
              path="/delete-reservation"
              element={<DeleteReservation />}
            ></Route>
            <Route path="/error" element={<ReservationError />}></Route>
          </Routes>
          <Footer al={al} setAl={setAl} />
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
