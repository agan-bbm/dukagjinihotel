import React, { useState } from "react";
import { AddressMap, Map } from "../About/map";
import "./contact.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    // setTimeout(() => {
    //   setSubmitting(false);
    // }, 5000);
  };
  console.log(form);
  const sendEmail = (e) => {
    const f = new FormData();
    f.append("name", form.name);
    f.append("email", form.email);
    f.append("message", form.message);

    axios
      .post(
        "https://cmsdukagjini.blackbird.marketing/wp-content/contactForm.php",
        f
      )
      .then((res) => {
        console.log(res);
        // setReservationId(res.data);
        // document.getElementById("confirmReservationEmail").click();

        // setPage(page + 1);
      })
      .catch((err) => {
        console.log(err);
        window.location.href = window.location.origin + "/error";
      });
  };
  return (
    <>
      <div className="contactWrapper">
        <div className="containerWrapper">
          <div className="formAndMap" style={{ padding: "50px 0px;" }}>
            <div
              className="formDiv"
              style={submitting ? { display: "none" } : { display: "block" }}
            >
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
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Send"
                    className="sendButton"
                    onClick={() => {
                      sendEmail();
                    }}
                  />
                </div>
                <div className="wrapper">
                  {submitting && <div>Submtting Form...</div>}
                </div>
              </form>
            </div>
            <div
              style={
                submitting
                  ? {
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                      marginTop: "100px",
                    }
                  : { display: "none" }
              }
            >
              <p className="submitted-msg">
                Thank you for contacting us ! We'll contact you shortly.
              </p>
              <p>
                <Link to="/">Back to Homepage</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
