import React from "react";

//CSS
import "./fourthSection.css";

//IMAGES
import Img1 from "../../../../images/1.jpg";
import Img2 from "../../../../images/2.jpg";
import Img3 from "../../../../images/3.jpg";

import livingroom from "../../../../images/livingroom.png";
import bath from "../../../../images/bath.png";
import seaview from "../../../../images/seaview.png";
import balcony from "../../../../images/balcony.png";
import recommendedRoom from "../../../../images/recommendedRoom.png";

function fourthSection() {
  return (
    <div className="fourthSection">
      <div className="containerWrapper">
        <div className="recomendations">
          <h2>Rekomandimet tona për ju!</h2>
          <p>
            Të gjitha dhomat tona janë unike me një stil të veçantë dhe luksos.
            Hotel Dukagjini sjell për ju magjinë e të ndjehurit rehat në dhomat
            e përgatitura për komoditetin tuaj!
          </p>
          <div className="roomRecomendations">
            <div className="single-room-rec">
              <img src={recommendedRoom} alt="" />
              <h4>Deluxe Room</h4>
              <p className="recpar">
                A 120sq foot bedroom apartment with a view.
              </p>
              <div className="icon-info">
                <div className="icon">
                  <img src={seaview} alt="" />
                  <p>Sea view</p>
                </div>
                <div className="icon">
                  <img src={balcony} alt="" />
                  <p>Balcony </p>
                </div>

                <div className="icon">
                  <img src={bath} alt="" />
                  <p>Bath</p>
                </div>

                <div className="icon">
                  <img src={livingroom} alt="" />
                  <p>Living Room</p>
                </div>
              </div>
              <div className="price-book">
                <p className="price">
                  $35 <span className="pernight">/Night</span>
                </p>
                <button>Check Rooms</button>
              </div>
            </div>
            <div className="single-room-rec">
              <img src={recommendedRoom} alt="" />
              <h4>Deluxe Room</h4>
              <p className="recpar">
                A 120sq foot bedroom apartment with a view.
              </p>
              <div className="icon-info">
                <div className="icon">
                  <img src={seaview} alt="" />
                  <p>Sea view</p>
                </div>
                <div className="icon">
                  <img src={balcony} alt="" />
                  <p>Balcony </p>
                </div>

                <div className="icon">
                  <img src={bath} alt="" />
                  <p>Bath</p>
                </div>

                <div className="icon">
                  <img src={livingroom} alt="" />
                  <p>Living Room</p>
                </div>
              </div>
              <div className="price-book">
                <p className="price">
                  $35 <span className="pernight">/Night</span>
                </p>
                <button>Check Rooms</button>
              </div>
            </div>
            <div className="single-room-rec">
              <img src={recommendedRoom} alt="" />
              <div className="room-dsc-div">
                <h4>Deluxe Room</h4>
                <p className="recpar">
                  A 120sq foot bedroom apartment with a view.
                </p>
                <div className="icon-info">
                  <div className="icon">
                    <img src={seaview} alt="" />
                    <p>Sea view</p>
                  </div>
                  <div className="icon">
                    <img src={balcony} alt="" />
                    <p>Balcony </p>
                  </div>

                  <div className="icon">
                    <img src={bath} alt="" />
                    <p>Bath</p>
                  </div>

                  <div className="icon">
                    <img src={livingroom} alt="" />
                    <p>Living Room</p>
                  </div>
                </div>
                <div className="price-book">
                  <p className="price">
                    $35 <span className="pernight">/Night</span>
                  </p>
                  <button>Check Rooms</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bookOffer">
            <div className="offerLeft">
              <h2>Book your first room with a 20% discount.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,Lorem ipsum dolor sit ame.
              </p>
            </div>
            <div className="offerRight">
              <button>Check Rooms</button>
            </div>
          </div>
        </div>
        <div className="fourthContainer">
          <div className="fourthHeader">
            <h2>Joyful experiences for you and your family</h2>
          </div>

          <div className="fourthSectionPart">
            <div className="fourthSectionLeft">
              <img src={Img1} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  Momente lumturie për ju dhe familjen tuaj!
                </h2>
                <p>
                  Nëse dëshironi të kaloni një vikend relaksues, me familjen
                  tuaj, Hotel Dukagjini është zgjidhja ideale. Së bashku do të
                  keni mundësin të shijoni pjata tejet të shijshme, të
                  relaksoheni në pishinën tonë, e të shijoni edhe pamjet
                  mahnitëse që ofron qyteti i bukur i Pejës.
                </p>
                <p>
                  Ochean de View extends along a private, quiet and beautiful
                  tropical beach. Stay away from the crowd and enjoy the beauty
                  and lust.
                </p>
                <button className="gridBtn">VIEW OUR ROOMS</button>
              </div>
            </div>
          </div>

          <div className="fourthSectionFliped">
            <div className="fourthSectionLeft">
              <img src={Img2} />
            </div>
            <div className="fourthSectionRight">
              <div className="fourthSectionBox">
                <h2 className="fourthSectionHeader">
                  Momente lumturie për ju dhe familjen tuaj!
                </h2>
                <p>
                  Nëse dëshironi të kaloni një vikend relaksues, me familjen
                  tuaj, Hotel Dukagjini është zgjidhja ideale. Së bashku do të
                  keni mundësin të shijoni pjata tejet të shijshme, të
                  relaksoheni në pishinën tonë, e të shijoni edhe pamjet
                  mahnitëse që ofron qyteti i bukur i Pejës.
                </p>
                <button className="gridBtn">VIEW OUR ROOMS</button>
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
