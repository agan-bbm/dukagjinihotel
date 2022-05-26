import React from "react";

//CSS
import "./thirdSection.css";

// SLIDER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function ThirdSection({ posts, al }) {
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
          <img src={posts.thirdslider.firstsliderimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={posts.thirdslider.secondslideimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={posts.thirdslider.thirdslideimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={posts.thirdslider.fourthslideimg} />
        </SwiperSlide>
      </Swiper>
      <div className="containerWrapper">
        <div className="thirdSection1">
          <div className="thirdsectionDesc">
            <h2>{posts.thirdheading}</h2>
            <p>{posts.thirdparagraph}</p>

            <Link to="/our-rooms">
              <button className="bookingThirdButton  default-button">
                {al ? "Shiko dhomat" : "Check rooms"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
