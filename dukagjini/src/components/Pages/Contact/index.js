import React, { useState } from "react";
import { AddressMap, Map } from "../About/map";
import "./contact.css";

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 5000);
  };

  return (
    <>
      <div className="contactWrapper">
        <div className="containerWrapper">
          <div className="formAndMap" style={{ padding: "50px 0px;" }}>
            <div className="formDiv">
              <h1 className="titulli">Contact us</h1>
              <p className="paragraf">
                Contact us if you need any help or have any questions
              </p>
              <form className="contactform" onSubmit={handleSubmit}>
                <div className="nameLabel">
                  <label for="fullName">Full name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Full name"
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
                    required="true"
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
                    required
                  />
                </div>
                <div>
                  <input type="submit" value="Send" className="sendButton" />
                </div>
                <div className="wrapper">
                  {submitting && <div>Submtting Form...</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
