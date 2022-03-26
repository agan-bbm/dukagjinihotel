import React from "react";

//styles
import "./footer.css";
//images
import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import dukagjinilogofooter from "../../../images/dukagjinilogofooter.svg";
import twitter from "../../../images/twitter.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="containerWrapper">
          <div className="footer-container">
            <div className="logo-container">
              <div className="footer-logo">
                <img src={dukagjinilogofooter} alt="" />
              </div>
              <div className="footer-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et <br />{" "}
                dolore magna aliqua.
              </div>
              <div>
                <h2>Subscribe to our newsletter</h2>
                <input type="email" />
              </div>
            </div>
            <div className="about-footer">
              <h2>ABOUT</h2>
              <ul>
                <li>Get the Cooper Kit</li>
                <li>See Inside a Kit</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="contact-footer">
              <h2>CONTACT</h2>

              <ul>
                <li>Get the Cooper Kit</li>
                <li>See Inside a Kit</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="socials-footer">
              <h2>SOCIALS</h2>

              <ul>
                <li>
                  <div className="icon-socials">
                    <img src={facebook} alt="" /> Facebook
                  </div>
                </li>
                <li>
                  <div className="icon-socials">
                    <img src={instagram} alt="" /> Instagram
                  </div>
                </li>
                <li>
                  <div className="icon-socials">
                    <img src={twitter} alt="" /> Twitter
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bbm">
        <div class="">
          Made with <span class="love">❤</span> by{" "}
          <a id="blackbird" href="https://www.blackbird.marketing/">
            Black Bird Marketing
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
