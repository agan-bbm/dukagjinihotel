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
import { Terms } from "./components/Pages/TOC/terms";
import { Spa } from "./components/Pages/SPA page/spa";
import Restaurant from "./components/Pages/Restaurant/restaurant";
import Wedding from "./components/Pages/Sallat e dasmave/Wedding";
import Peja from "./components/Pages/Peja City/peja";

console.log(
  "%c Developed by: Black Bird Marketing https://blackbird.marketing",
  "padding:9px 5px; background:black; line-height:25px;color: white"
);
console.warn = console.error = () => {};

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
    childrenover6: 0,

    childrenunder6: 0,
    roomName: "",
    guests: 1,
    longRoomName: "",
    nights: 1,
    price: 0,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  useEffect(() => {
    axios
      .get("https://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/pages/")
      .then((res) => {
        setState({
          posts: res.data,
          isLoaded: true,
        });
      })

      .catch((err) => console.log(err));
  }, []);

  var homepage,
    homepageAl,
    about,
    aboutAl,
    rooms,
    roomsAl,
    restaurant,
    spa,
    peja,
    wedding;
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
      case 578:
        wedding = e;
        break;
      case 572:
        restaurant = e;
        break;
      case 574:
        spa = e;
        break;
      case 576:
        peja = e;
        break;
    }
  });
  // console.log("-----------------------------");
  // console.log("BOOKING INFOOO", book);
  // console.log("-----------------------------");

  // console.log(state.posts);
  // console.log(peja);

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
                  posts={homepage}
                  setBook={setBook}
                  al={al}
                />
              }
            />
            <Route
              path="/about"
              element={<About posts={!al ? about : aboutAl} />}
            />
            <Route path="/terms-and-conditions" element={<Terms al={al} />} />
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
              path="/spa"
              element={<Spa posts={spa} al={al}></Spa>}
            ></Route>
            <Route
              path="/restaurant"
              element={<Restaurant posts={restaurant} al={al}></Restaurant>}
            ></Route>
            <Route
              path="/wedding"
              element={<Wedding posts={wedding} al={al}></Wedding>}
            ></Route>
            <Route
              path="/peja"
              element={<Peja posts={peja} al={al}></Peja>}
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
