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

function SixthSection({ posts }) {
  return (
    <div className="sixthSection">
      <div className="containerWrapper">
        {/* <div className="containerWrapper"> */}
        <div className="sixthContainer">
          <div className="sixthHeader">
            <h2 style={{ fontSize: "26px" }}>
              {posts[2].acf.sixthbanner.testimonialheading}
            </h2>
            <p style={{ fontWeight: "300", fontSize: "16px" }}>
              {posts[2].acf.sixthbanner.testimonialParagraph}
            </p>
          </div>
          <Swiper
            // slidesPerView={1}
            centeredSlides={true}
            // spaceBetween={0}
            grabCursor={true}
            spaceBetween={50}
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
                  {/* <div className="profilePic">
                    <img src={posts[2].acf.testimonials[0].clientimg} />
                  </div> */}
                  <p className="userDscr">
                    {posts[2].acf.testimonials[0].clienttype}
                  </p>
                  <h2>{posts[2].acf.testimonials[0].testimonialheding}</h2>
                  <p>{posts[2].acf.testimonials[0].testimonialparagraph}</p>
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
                  {/* <div className="profilePic">
                    <img src={posts[2].acf.testimonials[1].clientimg} />
                  </div> */}
                  <p className="userDscr">
                    {posts[2].acf.testimonials[1].clienttype}
                  </p>
                  <h2>{posts[2].acf.testimonials[1].testimonialheding}</h2>
                  <p>{posts[2].acf.testimonials[1].testimonialparagraph}</p>
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
                  {/* <div className="profilePic">
                    <img src={posts[2].acf.testimonials[2].clientimg} />
                  </div> */}
                  <p className="userDscr">
                    {posts[2].acf.testimonials[2].clienttype}
                  </p>
                  <h2>{posts[2].acf.testimonials[2].testimonialheding}</h2>
                  <p>{posts[2].acf.testimonials[2].testimonialparagraph}</p>
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
                  {/* <div className="profilePic">
                    <img src={posts[2].acf.testimonials[3].clientimg} />
                  </div> */}
                  <p className="userDscr">
                    {posts[2].acf.testimonials[3].clienttype}
                  </p>
                  <h2>{posts[2].acf.testimonials[3].testimonialheding}</h2>
                  <p>{posts[2].acf.testimonials[3].testimonialparagraph}</p>
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
                  {/* <div className="profilePic">
                    <img src={posts[2].acf.testimonials[4].clientimg} />
                  </div> */}
                  <p className="userDscr">
                    {posts[2].acf.testimonials[4].clienttype}
                  </p>
                  <h2>{posts[2].acf.testimonials[4].testimonialheding}</h2>
                  <p>{posts[2].acf.testimonials[4].testimonialparagraph}</p>
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
