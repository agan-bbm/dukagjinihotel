import React from 'react'

//CSS
import "./sixthSection.css";

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
        <div className="sixthContainer">
          <div className="sixthHeader">
            <h2>
              Hear what our past guests have to say
            </h2>
          </div>
          <Swiper
            slidesPerView={1}
            //centeredSlides={true}
            spaceBetween={30}
            //grabCursor={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper testimonial chill"
            loop={true}

            breakpoints={{
              // when window width is >= 600px
              600: {
                slidesPerView: 2,
              },
            }}

          >

            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <p>"Aenean eget consectetur ante. Quisque sit amet sem id nulla tincidunt rhoncus. Sed iaculis tortor vitae nibh varius bibendum. Pellentesque a lectus consectetur."</p>
                  <div className="user">
                    <div className="profilePic">
                      <img src={ProfilePic} />

                    </div>
                    <div className="userName">
                      <span>Graham Cracker</span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <p>"Aenean eget consectetur ante. Quisque sit amet sem id nulla tincidunt rhoncus. Sed iaculis tortor vitae nibh varius bibendum. Pellentesque a lectus consectetur."</p>
                  <div className="user">
                    <div className="profilePic">
                      <img src={ProfilePic} />

                    </div>
                    <div className="userName">
                      <span>Name Surname</span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <p>"Aenean eget consectetur ante. Quisque sit amet sem id nulla tincidunt rhoncus. Sed iaculis tortor vitae nibh varius bibendum. Pellentesque a lectus consectetur."</p>
                  <div className="user">
                    <div className="profilePic">
                      <img src={ProfilePic} />

                    </div>
                    <div className="userName">
                      <span>Name Surname</span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <p>"Aenean eget consectetur ante. Quisque sit amet sem id nulla tincidunt rhoncus. Sed iaculis tortor vitae nibh varius bibendum. Pellentesque a lectus consectetur."</p>
                  <div className="user">
                    <div className="profilePic">
                      <img src={ProfilePic} />

                    </div>
                    <div className="userName">
                      <span>Name Surname </span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial">
                <div className="testimonialContainer">
                  <p>"Aenean eget consectetur ante. Quisque sit amet sem id nulla tincidunt rhoncus. Sed iaculis tortor vitae nibh varius bibendum. Pellentesque a lectus consectetur."</p>
                  <div className="user">
                    <div className="profilePic">
                      <img src={ProfilePic} />

                    </div>
                    <div className="userName">
                      <span>Name Surname</span>
                      <p>Designer at Colorlib</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SixthSection