import React from "react";

//CSS
import "./thirdSection.css";

// SLIDER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";

//import Img1 from "../../../../images/1.jpg";
import Img2 from "../../../../images/2.jpg";
import Img3 from "../../../../images/3.jpg";
import Img4 from "../../../../images/4.jpg";

import Img1 from "../../../../images/1.jpg";

function ThirdSection() {
  return (
    <div className="thirdSection">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        //spaceBetween={0}
        grabCursor={true}
        navigation
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation]}
        className="home-gallery"
        loop={true}
        breakpoints={{
          600: {
            slidesPerView: 1.7,
          },
        }}
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
      </Swiper>
      <div className="containerWrapper">
        <div className="thirdSection1">
          <div className="thirdsectionDesc">
            <h2>Njihuni me ambientet e Hotel Dukagjinit</h2>
            <p>
              Me një ekip të pasionuar dhe të palodhur në punën që bëjnë, kemi
              arritur t'iu sjellim momente magjike. Në Hotel Dukagjini,
              përjetoni komoditet dhe ekperiencë unike. Hotel Dukagjini është
              dhurata më e mirë për ju dhe të dashurit tuaj.
            </p>
            <button className="bookingThirdButton">View our rooms</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
