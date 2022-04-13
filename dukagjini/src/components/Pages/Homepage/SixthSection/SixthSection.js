import React from "react";

//CSS
import "./sixthSection.css";
import { Navigation } from "swiper";
// SLIDER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";

import ProfilePic from "../../../../../src/images/sixthSectionProfilePic.webp";

function SixthSection() {
  return (
    <div className="sixthSection">
      <div className="containerWrapper">
        {/* <div className="containerWrapper"> */}
        <div className="sixthContainer">
          <div className="sixthHeader">
            <h2>Hear what our past guests have to say</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc ut labore et dolore magna aliqua. Ut enim ad
              minim veniam,Lorem ipsum dolor sit ame.
            </p>
          </div>
          <Swiper
            // slidesPerView={1}
            centeredSlides={true}
            // spaceBetween={0}
            grabCursor={true}
            spaceBetween={120}
            slidesPerView={1}
            roundLengths={true}
            loop={true}
            pagination={true}
            modules={[Pagination]}
            loopAdditionalSlides={30}
            className="sixthslidegallery"
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <div className="profilePic">
                    <img src={ProfilePic} />
                  </div>
                  <p className="userDscr">Tourist</p>
                  <h2>“Great hospitality”</h2>
                  <p>
                    "Aenean eget consectetur ante. Quisque sit amet sem id nulla
                    tincidunt rhoncus. Sed iaculis tortor vitae nibh varius
                    bibendum. Pellentesque a lectus consectetur."
                  </p>
                  {/* <div className="user">
                    <div className="userName">
                      <span>Name Surname</span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <div className="profilePic">
                    <img src={ProfilePic} />
                  </div>
                  <p className="userDscr">Tourist</p>
                  <h2>“Great hospitality”</h2>
                  <p>
                    "Aenean eget consectetur ante. Quisque sit amet sem id nulla
                    tincidunt rhoncus. Sed iaculis tortor vitae nibh varius
                    bibendum. Pellentesque a lectus consectetur."
                  </p>
                  {/* <div className="user">
                    <div className="userName">
                      <span>Name Surname</span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <div className="profilePic">
                    <img src={ProfilePic} />
                  </div>
                  <p className="userDscr">Tourist</p>
                  <h2>“Great hospitality”</h2>
                  <p>
                    "Aenean eget consectetur ante. Quisque sit amet sem id nulla
                    tincidunt rhoncus. Sed iaculis tortor vitae nibh varius
                    bibendum. Pellentesque a lectus consectetur."
                  </p>
                  {/* <div className="user">
                    <div className="userName">
                      <span>Name Surname</span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <div className="profilePic">
                    <img src={ProfilePic} />
                  </div>
                  <p className="userDscr">Tourist</p>
                  <h2>“Great hospitality”</h2>
                  <p>
                    "Aenean eget consectetur ante. Quisque sit amet sem id nulla
                    tincidunt rhoncus. Sed iaculis tortor vitae nibh varius
                    bibendum. Pellentesque a lectus consectetur."
                  </p>
                  {/* <div className="user">
                    <div className="userName">
                      <span>Name Surname</span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <div className="profilePic">
                    <img src={ProfilePic} />
                  </div>
                  <p className="userDscr">Tourist</p>
                  <h2>“Great hospitality”</h2>
                  <p>
                    "Aenean eget consectetur ante. Quisque sit amet sem id nulla
                    tincidunt rhoncus. Sed iaculis tortor vitae nibh varius
                    bibendum. Pellentesque a lectus consectetur."
                  </p>
                  {/* <div className="user">
                    <div className="userName">
                      <span>Name Surname</span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
