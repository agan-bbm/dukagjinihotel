import { React, useState } from "react";

//styles
import "./footer.css";
//images
import dukagjinilogofooter from "../../../images/logooffooter.png";
import { Link } from "react-router-dom";
import instagram from "../../../images/instagram.svg";
import facebook from "../../../images/facebook.svg";
// import twitter from "../../../images/Twitter.svg";

function Footer({ al }) {
  const [setCounter] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };
  return (
    <>
      <div className="footer">
        <div className="containerWrapper">
          <div className="footer-container">
            <div className="logo-container">
              <div className="footer-logo">
                <img src={dukagjinilogofooter} alt="" />
                <p style={{ marginBottom: "0" }}></p>
              </div>

              <div className="footer-info"></div>

              {/* <div>
                <h2>Subscribe to our newsletter</h2>
                <input type="email" />
              </div> */}
            </div>
            <div className="about-footer">
              <ul className="footerLists">
                <Link to="/">
                  <h2 style={{ color: "white" }}>Dukagjini Hotel</h2>
                </Link>
                <p style={{ marginTop: "0" }}>
                  {al
                    ? "Vendi ku duhet të vini kur jeni në Pejë"
                    : "The place you need to be when in Peja"}
                </p>
                <p>
                  {" "}
                  <a
                    href="mailto:info@hoteldukagjini.com"
                    style={{ color: "#BFBFBF" }}
                  >
                    {" "}
                    info@hoteldukagjini.com
                  </a>
                </p>
                <p>
                  {" "}
                  <a style={{ color: "#BFBFBF" }} href="tel: 049766140">
                    {" "}
                    +38349766140
                  </a>{" "}
                </p>
                <p>
                  {" "}
                  <a style={{ color: "#BFBFBF" }} href="tel: 038 771 166">
                    {" "}
                    038 771 166
                  </a>{" "}
                </p>
                <p>
                  {" "}
                  <a style={{ color: "#BFBFBF" }} href="tel: 038 771 177">
                    {" "}
                    038 771 177
                  </a>{" "}
                </p>
              </ul>
            </div>
            <div className="contact-footer">
              <h2 className="footer-link-heading">{al ? "Dhomat" : "Rooms"}</h2>
              <ul className="footerLists">
                <Link to="/our-rooms">
                  <li>{al ? "Dhomat tona" : "Our Rooms"}</li>
                </Link>

                <Link to="/booking">
                  <li>{al ? "Rezervimi" : "Booking"}</li>
                </Link>

                {/* <li>About Us</li> */}
              </ul>
            </div>
            <div className="contact-footer">
              <h2 className="footer-link-heading">
                {al ? "Kontakti" : "Get in touch"}
              </h2>
              <ul className="footerLists">
                <Link to="/contact">
                  <li>{al ? "Na kontaktoni" : "Contact us"}</li>
                </Link>
              </ul>
            </div>
            <div className="contact-footer">
              <h2 className="footer-link-heading">
                {al ? "Kompania" : "Company"}
              </h2>

              <ul className="footerLists">
                <Link to="/about">
                  <li>{al ? "Rreth nesh" : "About us"}</li>
                </Link>
                <Link to="/terms-and-conditions">
                  <li>{al ? "Termet e përdorimit" : "Terms & Conditions"}</li>
                </Link>
                <Link to="/about">
                  <li>{al ? "Lokacioni" : "Location"}</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="socials-rights">
            <div className="soc-med">
              <ul>
                <a href="https://www.instagram.com/hoteldukagjini/?hl=en">
                  <li>
                    <img
                      src={instagram}
                      style={{ width: "37px", height: "37px" }}
                      alt=""
                    />
                  </li>
                </a>
                <a href="https://www.facebook.com/hoteldukagjini/">
                  <li>
                    <img src={facebook} alt="" />
                  </li>
                </a>
                {/* <li>
                  <img src={twitter} alt="" />
                </li> */}
              </ul>
            </div>
            <div className="alr-res">
              © 2022 Hotel Dukagjini. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      <div className="bbm">
        <div className="">
          Made with <span className="love">❤</span> by{" "}
          <a id="blackbird" href="https://www.blackbird.marketing/">
            Black Bird Marketing
          </a>
        </div>
      </div>
      {/* <div className="sticky">
        <div className="sticky-content">
          <p>Book directly with Us</p>
          <div className="booking-footer-inputs">
            <input
              type="date"
              id="start"
              name="trip-start"
              // value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            ></input>
            <div className="guest-adults">
              <span className="number">2</span>
              <span>Adults</span>
              <button className="plus" onClick={increase}>
                +
              </button>
              <button className="minus" onClick={decrease}>
                -
              </button>
            </div>
            <div className="counter-btns"></div>
          </div>
          <div>
            <button className="available">Check Availability</button>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Footer;
