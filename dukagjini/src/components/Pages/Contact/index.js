import React from "react";
import { AddressMap, Map } from "../About/map";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contactWrapper">
        <div className="containerWrapper">
          <div className="formAndMap">
            <div className="formDiv">
              <h1 className="titulli">Contact us</h1>
              <p className="paragraf">
                Contact us if you need any help or have any questions
              </p>
              <form className="contactform">
                <div className="nameLabel">
                  <label for="fullName">Full name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Emri Mbiemri"
                    className="nameEmail"
                    tabIndex="1"
                  />
                </div>
                <div>
                  <label for="email">Email</label>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="nameEmail"
                    placeholder="example@email.com"
                    tabIndex="3"
                  />
                </div>

                <div>
                  <label for="message">What are you contacting for?</label>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="message"
                    name="message"
                  />
                </div>
                <div>
                  <input type="submit" value="Send" className="sendButton" />
                </div>
              </form>
            </div>
            <div className="mapDiv">
              <AddressMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
