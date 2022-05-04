import React from "react";

//CSS
import "./thirdSection.css";

// SLIDER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";

function ThirdSection({ posts }) {
  console.log(posts);
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
          <img src={posts[2].acf.thirdbanner.thirdslider.firstsliderimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={posts[2].acf.thirdbanner.thirdslider.secondslideimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={posts[2].acf.thirdbanner.thirdslider.thirdslideimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={posts[2].acf.thirdbanner.thirdslider.fourthslideimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={posts[2].acf.thirdbanner.thirdslider.fifthsliderimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={posts[2].acf.thirdbanner.thirdslider.sixthsliderimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={posts[2].acf.thirdbanner.thirdslider.seventhsliderimg} />
        </SwiperSlide>
      </Swiper>
      <div className="containerWrapper">
        <div className="thirdSection1">
          <div className="thirdsectionDesc">
            <h2>{posts[2].acf.thirdbanner.thirdheading}</h2>
            <p>{posts[2].acf.thirdbanner.thirdheading}</p>
            <button className="bookingThirdButton  default-button">View our rooms</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
