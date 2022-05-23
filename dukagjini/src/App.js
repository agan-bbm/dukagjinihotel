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
  const [dates, setDates] = useState({ from: "", to: "" });

  const [book, setBook] = useState({
    checkin: "",
    checkout: "",
    adult: 1,
    children: 0,
    roomName: "",
    guests: 1,
  });
  useEffect(() => {
    axios
      .get("http://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/pages/")
      .then((res) => {
        // console.log(res);
        setState({
          posts: res.data,
          isLoaded: true,
        });
      })

      .catch((err) => console.log(err));

    // axios
    //   .get("http://cmsdukagjini.blackbird.marketing/wp-json/wp/v2/posts")
    //   .then((res) =>
    //     setPeekInside({
    //       inside: res.data,
    //       isLoaded: true,
    //       refresh: 0,
    //     })
    //   )
    //   .catch((err) => console.log(err));
  }, []);

  var homepageId, formId;
  state.posts.map((e) => {
    switch (e.id) {
      case 8:
        formId = e;
        break;
    }
  });
  console.log("-----------------------------");
  console.log("BOOKING INFOOO", book);
  console.log("-----------------------------");

  if (state.isLoaded === false) return null;
  else {
    return (
      <div className="App">
        <ScrollToTop>
          <Navbar />

          {/* <div className="homepage"> */}
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Homepage posts={state.posts} book={book} setBook={setBook} />
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
                />
              }
            />
            <Route path="/about" element={<About posts={state.posts} />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="our-rooms" element={<StaticRooms />} />
            <Route
              path="/single-room/:id"
              element={<Singleroom book={book} setBook={setBook} />}
            />
            <Route
              path="/checkout/:id"
              element={
                <Checkout posts={state.posts} book={book} setBook={setBook} />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thankyou" element={<Thankyou />}></Route>
            <Route
              path="/update-reservation"
              element={<UpdateReservation />}
            ></Route>
            <Route
              path="/delete-reservation"
              element={<DeleteReservation />}
            ></Route>
          </Routes>
          {/* </div> */}
          <Footer />
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
