import React from "react";

// SLIDER
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "./firstSection.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//IMAGES
import mainimgbanner from "../../../../images/mainimagebanner.png";
import Img1 from "../../../../images/1.jpg";
import Img2 from "../../../../images/2.jpg";
import Img3 from "../../../../images/3.jpg";
import Img4 from "../../../../images/4.jpg";

function FirstSection() {
  return (
    // <div className="hompage-first-section">
    //   <div className="coverImage">
    //     <img src={Img1} />
    //   </div>
    <>
      <div className="firstSection">
        <div className="leftSide">
          <div className="leftContainer">
            <h2>
              Mirësevini në Hotel Dukagjini, një ikonë historike i vendosur në
              zemër të qytetit të Pejës.
            </h2>
            <p>
              Hoteli paraqet një arkitekturë unike që tërheq banorë dhe vizitorë
              duke qenë edhe pikë referimi për qytetin e Pejës. I vendosur në
              qendër të qytetit, i rrethuar nga lumi Lumbardh dhe male të larta,
              Hotel Dukagjini vendos një standard të ri për mikpritje dhe
              shërbim.
            </p>
            <button> View our rooms</button>
            <div className="bookingFirstBanner">
              <div className="choosing-option">
                <label for="start">Start date:</label>

                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2018-07-22"
                  min="2018-01-01"
                  max="2018-12-31>
<input "
                ></input>
              </div>
              <div className="choosing-option">
                <label for="start">Start date:</label>

                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2018-07-22"
                  min="2018-01-01"
                  max="2018-12-31>
<input "
                ></input>
              </div>
              <div className="choosing-option">
                <label for="start">Start date:</label>

                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2018-07-22"
                  min="2018-01-01"
                  max="2018-12-31>
<input "
                ></input>
              </div>
              <div>
                <button> Check rooms</button>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <img src={mainimgbanner} alt="" />
        </div>
      </div>
    </>
  );
}

export default FirstSection;
