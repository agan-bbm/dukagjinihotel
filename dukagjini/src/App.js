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

console.log(
  "%c Developed by: Black Bird Marketing https://blackbird.marketing",
  "padding:9px 5px; background:black; line-height:25px;color: white"
);
function App() {
  const [state, setState] = useState({
    posts: [],
    isLoaded: false,
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
  if (state.isLoaded === false) return null;
  else {
    return (
      <div className="App">
        <Navbar />

        <div className="homepage">
          <Routes>
            <Route path="/" exact element={<Homepage posts={state.posts} />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/single-room" element={<Singleroom />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
