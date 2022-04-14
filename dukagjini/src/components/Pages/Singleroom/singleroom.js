import React from "react";
import "./singleroom.css";

import fullrightimg from "../../../images/fullrightimg.png";
import lefttopimg from "../../../images/lefttopimg.png";
import leftbottomimg from "../../../images/leftbottomimg.png";

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
              <div>
                <img src={lefttopimg} alt="" />
              </div>
              <div>
                <img src={leftbottomimg} alt="" />
              </div>
            </div>
          </div>
          <h2>Standard room</h2>
          <p>Prishtine, Kosove</p>

          <div className="single-room-informations">
            <div className="sr-info-left">
              <p>Përshkrimi</p>
              <p>
                Me një pamje mahnitëse të qytetit dhe lumit, shijoni rehatinë e
                dhomës standarte. Dhoma standarte përbëhet prej: një shtrat për
                të rritur, sipas kërkesës edhe për fëmijë. Dhoma ka një banjo
                komforte, minibar, kondicioner, TV, tharëse flokësh.{" "}
              </p>

              <p>Hotel Features</p>
              <div className="ikonat-single-room"></div>

              <p>Hotel Features</p>
              <div className="ikonat-single-room"></div>
            </div>
            <div className="sr-info-right">
              <div className="cart">
                <p className="cmimi-dhomes">
                  $35<span>/Night</span>
                </p>
                <hr />
                <div className="date-inputs">
                  <div>
                    <div className="select-dates">
                      <label htmlFor="checkin">Check In Date</label>
                      <input type="date" name="checkin" />
                    </div>
                    <div className="select-dates">
                      <label htmlFor="checkin">Check In Date</label>
                      <input type="date" name="checkin" />
                    </div>
                  </div>

                  <div>
                    <div className="select-dates">
                      <label htmlFor="checkin">Check In Date</label>
                      <input type="date" name="checkin" />
                    </div>
                    <div className="select-dates">
                      <label htmlFor="checkin">Check In Date</label>
                      <input type="date" name="checkin" />
                    </div>
                  </div>
                </div>
                <div className="shujorik">
                  <div className="price-single-page">
                    <p>Total</p>
                    <p>$70</p>
                  </div>
                  <div className="single-page-button">
                    <button>Book</button>
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
