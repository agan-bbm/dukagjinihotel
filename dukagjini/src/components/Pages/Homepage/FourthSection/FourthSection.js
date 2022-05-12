import React from "react";

//CSS
import "./fourthSection.css";

//IMAGES
import Img1 from "../../../../images/happy.png";
import Img2 from "../../../../images/modern.png";
import Img3 from "../../../../images/3.jpg";

import livingroom from "../../../../images/bed.svg";
import bath from "../../../../images/bathhub.svg";
// import wifi from "../../../../images/dashboard.svg";
import balcony from "../../../../images/user.svg";
import wifi from "../../../../images/wifi.svg";
import recommendedRoom from "../../../../images/recommendedRoom.png";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function fourthSection({ posts }) {
  return (
    <div className="fourthSection">
      <div className="containerWrapper">
        <div className="recomendations">
          <h2>Rekomandimet tona për ju!</h2>
          <p id="recommendationParagraph">
            Të gjitha dhomat tona janë unike me një stil të veçantë dhe luksoz.
            Hotel Dukagjini sjell për ju magjinë e të ndjehurit rehat në dhomat
            e përgatitura për komoditetin tuaj!
          </p>
          <div style={{ padding: "20px 0px" }}>
            <Swiper
              // slidesPerView={1}
              // centeredSlides={true}
              // spaceBetween={0}
              grabCursor={true}
              spaceBetween={50}
              slidesPerView={1}
              roundLengths={true}
              loop={true}
              pagination={true}
              modules={[Pagination]}
              loopAdditionalSlides={30}
              className=""
              breakpoints={{
                600: {
                  slidesPerView: 3,
                },
              }}
            >
              <div className="roomRecomendations">
                <SwiperSlide>
                  <div className="single-room-rec">
                    <img src={recommendedRoom} alt="" />
                    <h4>Standard Double Queen Room</h4>
                    <p className="recpar">
                      A 120sq foot bedroom apartment with a view.
                    </p>
                    <div className="icon-info">
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={balcony} alt="" />
                          <p>Balcony</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={bath} alt="" />
                          <p>Bath</p>
                        </div>
                      </div>
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={wifi} alt="" />
                          <p>Wifi</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={livingroom} alt="" />
                          <p>Bathroom</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-book">
                      <p className="price">
                        $35 <span className="pernight">/Night</span>
                      </p>
                      <Link to="/single-room/87">
                        <button className="default-button">Check Rooms</button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-room-rec">
                    <img src={recommendedRoom} alt="" />
                    <h4>Standard Double Queen Room</h4>
                    <p className="recpar">
                      A 120sq foot bedroom apartment with a view.
                    </p>
                    <div className="icon-info">
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={balcony} alt="" />
                          <p>Balcony</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={bath} alt="" />
                          <p>Bath</p>
                        </div>
                      </div>
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={wifi} alt="" />
                          <p>Wifi</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={livingroom} alt="" />
                          <p>Bathroom</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-book">
                      <p className="price">
                        $35 <span className="pernight">/Night</span>
                      </p>
                      <Link to="/single-room/87">
                        <button className="default-button">Check Rooms</button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-room-rec">
                    <img src={recommendedRoom} alt="" />
                    <h4>Standard Double Queen Room</h4>
                    <p className="recpar">
                      A 120sq foot bedroom apartment with a view.
                    </p>
                    <div className="icon-info">
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={balcony} alt="" />
                          <p>Balcony</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={bath} alt="" />
                          <p>Bath</p>
                        </div>
                      </div>
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={wifi} alt="" />
                          <p>Wifi</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={livingroom} alt="" />
                          <p>Bathroom</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-book">
                      <p className="price">
                        $35 <span className="pernight">/Night</span>
                      </p>
                      <Link to="/single-room/87">
                        <button className="default-button">Check Rooms</button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-room-rec">
                    <img src={recommendedRoom} alt="" />
                    <h4>Standard Double Queen Room</h4>
                    <p className="recpar">
                      A 120sq foot bedroom apartment with a view.
                    </p>
                    <div className="icon-info">
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={balcony} alt="" />
                          <p>Balcony</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={bath} alt="" />
                          <p>Bath</p>
                        </div>
                      </div>
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={wifi} alt="" />
                          <p>Wifi</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={livingroom} alt="" />
                          <p>Bathroom</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-book">
                      <p className="price">
                        $35 <span className="pernight">/Night</span>
                      </p>
                      <Link to="/single-room/87">
                        <button className="default-button">Check Rooms</button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-room-rec">
                    <img src={recommendedRoom} alt="" />
                    <h4>Standard Double Queen Room</h4>
                    <p className="recpar">
                      A 120sq foot bedroom apartment with a view.
                    </p>
                    <div className="icon-info">
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={balcony} alt="" />
                          <p>Balcony</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={bath} alt="" />
                          <p>Bath</p>
                        </div>
                      </div>
                      <div className="icon">
                        <div className="icon-flex">
                          <img src={wifi} alt="" />
                          <p>Wifi</p>
                        </div>
                      </div>

                      <div className="icon">
                        <div className="icon-flex">
                          <img src={livingroom} alt="" />
                          <p>Bathroom</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-book">
                      <p className="price">
                        $35 <span className="pernight">/Night</span>
                      </p>
                      <Link to="/single-room/87">
                        <button className="default-button">Check Rooms</button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>

          {/* <div className="single-room-rec">
              <img src={recommendedRoom} alt="" />
              <h4>Standard Double Queen Room</h4>
              <p className="recpar">
                A 120sq foot bedroom apartment with a view.
              </p>
              <div className="icon-info">
                <div className="icon">
                  <div className="icon-flex">
                    <img src={balcony} alt="" />
                    <p>Balcony</p>
                  </div>
                </div>

                <div className="icon">
                  <div className="icon-flex">
                    <img src={bath} alt="" />
                    <p>Bath</p>
                  </div>
                </div>
                <div className="icon">
                  <div className="icon-flex">
                    <img src={wifi} alt="" />
                    <p>Wifi</p>
                  </div>
                </div>

                <div className="icon">
                  <div className="icon-flex">
                    <img src={livingroom} alt="" />
                    <p>Bathroom</p>
                  </div>
                </div>
              </div>
              <div className="price-book">
                <p className="price">
                  $35 <span className="pernight">/Night</span>
                </p>
                <Link to="/single-room/87">
                  <button className="default-button">Check Rooms</button>
                </Link>
              </div>
            </div>
          </div> */}

          <div className="bookOffer">
            <div className="offerLeft">
              <h2>{posts[2].acf.bookOffer.bookheading}</h2>
              <p>
                {posts[2].acf.bookOffer.bookparagraph}
              </p>
            </div>
            <div className="offerRight">
              <Link to="booking">
                {" "}
                <button className="default-button">Check Rooms</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="fourthContainer">
          {/* <div className="fourthHeader">
            <h2>Joyful experiences for you and your family</h2>
          </div> */}

          <div className="fourthSectionPart">
            <div className="fourthSectionLeft">
              <img src={posts[2].acf.fifthbanner[0].fifthimage} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  {posts[2].acf.fifthbanner[0].fifthheading}
                </h2>
                <p>
                  {posts[2].acf.fifthbanner[0].fifthparagraph}
                </p>

                <Link to="/rooms">
                  <button className="gridBtn default-button">
                    View our rooms
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="fourthSectionFliped">
            <div className="fourthSectionLeft">
              <img src={posts[2].acf.fifthbanner[1].fifthimage} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  {posts[2].acf.fifthbanner[1].fifthheading}

                </h2>
                <p>
                  {posts[2].acf.fifthbanner[1].fifthparagraph}
                </p>
                <Link to="/rooms">
                  <button className="gridBtn default-button">
                    View our rooms
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="fourthSectionPart">
            <div className="fourthSectionLeft">
              <img src={Img3} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  A world-class restaurant
                </h2>
                <p>
                  Ochean de View extends along a private, quiet and beautiful
                  tropical beach. Stay away from the crowd and enjoy the beauty
                  and lust.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default fourthSection;
