import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./peja.css";
import { Navigation } from "swiper";

function Peja({ posts, al }) {
  console.log(posts);
  return (
    <>
      <div className="custom-pages">
        <div
          className="peja-banner"
          style={{
            backgroundImage: `url(${posts.acf.peja.banner})`,
          }}
        ></div>
        <div className="custom-pages-container">
          <h2 id="pejaheading" className="cp-heading">
            {!al ? posts.acf.peja.heading : posts.acf.pejashqip.heading}
          </h2>

          <div>
            <Swiper
              // slidesPerView={1}
              // centeredSlides={true}
              // spaceBetween={0}
              spaceBetween={15}
              slidesPerView={1}
              roundLengths={true}
              loop={true}
              pagination={true}
              arrows={true}
              draggable={true}
              navigation={true}
              modules={[Navigation]}
              loopAdditionalSlides={30}
              className="peja-slider"
              breakpoints={{
                600: {
                  slidesPerView: 2.2,
                },
              }}
            >
              <div className="pejaRecommended">
                {posts.acf.peja.slider.map((e) => (
                  <SwiperSlide>
                    <div className="peja-singleRecommended">
                      <div className="peja-sliderimg">
                        <img src={e.image} alt="" />
                      </div>
                      <div className="peja-slider-texts">
                        <h2>{!al ? e.heading : e.headingal}</h2>
                        <p>{!al ? e.paragraph : e.paragraphal}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="containerWrapper" id="peja-imagesdiv">
              <p className="peja-paragraph-4imgs" id="peja-deskt-paragraph">
                {!al ? posts.acf.peja.text : posts.acf.pejashqip.text}
              </p>

              <div className="peja-images">
                <div className="img-peja">
                  {" "}
                  <img src={posts.acf.peja.image1} alt="" id="peja1" />
                </div>
                <div className="img-peja">
                  {" "}
                  <img src={posts.acf.peja.image2} alt="" id="peja2" />
                </div>
                <div className="img-peja">
                  {" "}
                  <img src={posts.acf.peja.image3} alt="" id="peja3" />
                </div>
                <div className="img-peja">
                  {" "}
                  <img src={posts.acf.peja.image4} alt="" id="peja4" />
                </div>
              </div>
            </div>
            <div className="containerWrapper" id="peja-mobileimagesdiv">
              <div className="peja-mobileimages">
                <p className="peja-paragraph-4imgs">{posts.acf.peja.text}</p>

                <Swiper
                  spaceBetween={15}
                  slidesPerView={1}
                  roundLengths={true}
                  loop={true}
                  pagination={true}
                  arrows={true}
                  draggable={true}
                  navigation={true}
                  modules={[Navigation]}
                  loopAdditionalSlides={30}
                  className="peja-slider"
                  breakpoints={{
                    600: {
                      slidesPerView: 2.2,
                    },
                  }}
                >
                  <SwiperSlide>
                    {" "}
                    <div className="img-peja">
                      {" "}
                      <img src={posts.acf.peja.image1} alt="" id="peja1" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-peja">
                      {" "}
                      <img src={posts.acf.peja.image2} alt="" id="peja2" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    {" "}
                    <div className="img-peja">
                      {" "}
                      <img src={posts.acf.peja.image3} alt="" id="peja3" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="img-peja">
                      {" "}
                      <img src={posts.acf.peja.image4} alt="" id="peja4" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Peja;
