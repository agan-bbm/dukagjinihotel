import { React, useState } from "react";

//styles
import "./footer.css";
//images
import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import dukagjinilogofooter from "../../../images/logooffooter.png";
import twitter from "../../../images/twitter.png";

function Footer() {
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
                <p>Our Stores</p>
              </div>

              <div className="footer-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et <br />{" "}
                  dolore magna aliqua.
                </p>
                <p>dukagjini@hotmail.com</p>
                <p>049-111-222</p>
              </div>

              {/* <div>
                <h2>Subscribe to our newsletter</h2>
                <input type="email" />
              </div> */}
            </div>
            <div className="about-footer">
              <h2>About</h2>
              <ul>
                <li>Get the Cooper Kit</li>
              </ul>
            </div>
            <div className="contact-footer">
              <h2>Rooms</h2>

              <ul className="footerLists">
                <li>Get the Cooper Kit</li>
                <li>See Inside a Kit</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="contact-footer">
              <h2>Offers</h2>

              <ul className="footerLists">
                <li>Get the Cooper Kit</li>
                <li>See Inside a Kit</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="socials-footer">
              <h2>Social</h2>

              <ul>
                <li>
                  <div className="icon-socials">
                    {/* <img src={facebook} alt="" /> Facebook */}
                    <p>Facebook</p>
                  </div>
                </li>
                <li>
                  <div className="icon-socials">
                    <p>Instagram</p>

                    {/* <img src={instagram} alt="" /> Instagram */}
                  </div>
                </li>
                <li>
                  <div className="icon-socials">
                    <p>Twitter</p>

                    {/* <img src={twitter} alt="" /> Twitter */}
                  </div>
                </li>
              </ul>
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
