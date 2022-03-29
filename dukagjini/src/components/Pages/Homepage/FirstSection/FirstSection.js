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
import Img1 from "../../../../images/1.jpg";
import Img2 from "../../../../images/2.jpg";
import Img3 from "../../../../images/3.jpg";
import Img4 from "../../../../images/4.jpg";

function FirstSection() {
  return (
    <div className="hompage-first-section">
      <div>
        <img src={Img1} />
      </div>

      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="main-banner"
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={true}
      >
        <SwiperSlide>
          <img src={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}

export default FirstSection;
