import React from "react";
import "./singleroom.css";

import fullrightimg from "../../../images/fullrightimg.png";
import lefttopimg from "../../../images/lefttopimg.png";
import leftbottomimg from "../../../images/leftbottomimg.png";
import livingroom from "../../../images/user.svg";
import bath from "../../../images/bed.svg";
import seaview from "../../../images/dashboard.svg";
import balcony from "../../../images/wifi.svg";

function Singleroom() {
  return (
    <>
      <div className="single-room-page">
        <div className="containerWrapper">
          <div>
            <h2 className="single-room-title">Standard Room</h2>
          </div>

          <div className="review-single-room">
            <p>Review</p>
          </div>

          <div className="single-room-grid">
            <div className="grid-left-side">
              <img src={fullrightimg} alt="" />
            </div>
            <div className="grid-right-side">
              <div className="rightside-div">
                <img src={lefttopimg} alt="" />
              </div>
              <div className="rightside-div">
                <img src={leftbottomimg} alt="" />
              </div>
            </div>
          </div>
          <div className="title-and-location">
            <h2 className="single-room-title">Standard room</h2>
            <p id="lokacioni-dhomes">Prishtine, Kosove</p>
          </div>

          <div className="single-room-informations">
            <div className="sr-info-left">
              <p className="single-room-description">Përshkrimi</p>
              <p className="pershkrimi-p">
                Me një pamje mahnitëse të qytetit dhe lumit, shijoni rehatinë e
                dhomës standarte. Dhoma standarte përbëhet prej: një shtrat për
                të rritur, sipas kërkesës edhe për fëmijë. Dhoma ka një banjo
                komforte, minibar, kondicioner, TV, tharëse flokësh.{" "}
              </p>

              <div className="room-features-wrapper">
                <p className="room-features-p">Hotel Features</p>

                <div className="ikonat-single-room">
                  <div className="icon-info" id="single-room-iconinfo1">
                    <div className="icon-singleroom-page">
                      <img src={seaview} alt="" />
                      <p>Sea view</p>
                    </div>
                    <div className="icon-singleroom-page">
                      <img src={balcony} alt="" />
                      <p>Balcony </p>
                    </div>

                    <div className="icon-singleroom-page">
                      <img src={bath} alt="" />
                      <p>Bath</p>
                    </div>

                    <div className="icon-singleroom-page">
                      <img src={livingroom} alt="" />
                      <p>Living Room</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="room-features-p">Hotel Features</p>
              <div className="ikonat-single-room">
                <div className="icon-info" id="single-room-iconinfo2">
                  <div className="icon-singleroom-page">
                    <img src={seaview} alt="" />
                    <p>Sea view</p>
                  </div>
                  <div className="icon-singleroom-page">
                    <img src={balcony} alt="" />
                    <p>Balcony </p>
                  </div>

                  <div className="icon-singleroom-page">
                    <img src={bath} alt="" />
                    <p>Bath</p>
                  </div>

                  <div className="icon-singleroom-page">
                    <img src={livingroom} alt="" />
                    <p>Living Room</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sr-info-right">
              <div className="cart">
                <p className="cmimi-dhomes">
                  $35<span>/Night</span>
                </p>
                <hr />
                <div className="date-inputs">
                  <div className="sr-dates-flex">
                    <div className="select-dates">
                      <label htmlFor="checkin">Check In Date</label>
                      <input type="date" name="checkin" />
                    </div>
                    <div className="select-dates">
                      <label htmlFor="checkin">Check out Date</label>
                      <input type="date" name="checkin" />
                    </div>
                  </div>

                  <div className="sr-selects-flex">
                    <div className="select-dates select">
                      <label htmlFor="checkin">Adult</label>
                      <select name="checkin" id="">
                        <option value="0">0</option>
                        <option value="1">1</option>

                        <option value="2">2</option>

                        <option value="3">3</option>

                        <option value="4">4</option>

                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="select-dates select">
                      <label htmlFor="checkin">Children</label>
                      <select name="checkin" id="">
                        <option value="0">0</option>
                        <option value="1">1</option>

                        <option value="2">2</option>

                        <option value="3">3</option>

                        <option value="4">4</option>

                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="price-wrapper">
                  <div className="price-single-page">
                    <p className="total">Total</p>
                    <p className="total-price">$70</p>
                  </div>
                  <div className="single-page-button">
                    <button className="default-button">Book</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Singleroom;
