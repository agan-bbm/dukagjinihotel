import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./checkout.css";
export function Userdetails({
  formData,
  setFormData,
  book,
  al,
  CreateBooking,
  bookingData,
  setBookingData,
}) {
  const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  };
  const [acceptedT, setAcceptedT] = useState(false);
  const clickAgreement = () => {
    if (acceptedT === false) {
      setAcceptedT(true);
    } else {
      setAcceptedT(false);
    }
  };

  const validateEmail = (e) => {
    const emailRegex = new RegExp(
      /^([^@\s\."'\(\)\[\]\{\}\\/,:;]+\.)*[^@\s\."'\(\)\[\]\{\}\\/,:;]+@[^@\s\."'\(\)\[\]\{\}\\/,:;]+(\.[^@\s\."'\(\)\[\]\{\}\\/,:;]+)+$/i
    );

    if (emailRegex.test(e.target.value) === false) {
      setFormData({ ...formData, mailError: false, email: e.target.value });
      handleChange(e);
    } else {
      setFormData({ ...formData, mailError: true, email: e.target.value });
      handleChange(e);
    }
  };
  const validateNumber = (e) => {
    const strongRegex = new RegExp(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3,6})[-. ]?([0-9]{3,8})$/
    );

    if (strongRegex.test(e.target.value) === false) {
      setFormData({ ...formData, numberValid: false, number: e.target.value });
      handleChange(e);
    } else {
      setFormData({ ...formData, numberValid: true, number: e.target.value });
      handleChange(e);
    }
  };
  const validateUsername = (e) => {
    const strongRegex = new RegExp(
      "(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})"
    );

    if (!strongRegex.test(e.target.value)) {
      setFormData({ ...formData, nameValid: false, name: e.target.value });
      handleChange(e);
    } else {
      setFormData({ ...formData, nameValid: true, name: e.target.value });
      handleChange(e);
    }
  };
  const validateLastname = (e) => {
    const strongRegex = new RegExp(
      "(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})"
    );

    if (!strongRegex.test(e.target.value)) {
      setFormData({
        ...formData,
        lastNameValid: false,
        lastName: e.target.value,
      });
      handleChange(e);
    } else {
      setFormData({
        ...formData,
        lastNameValid: true,
        lastName: e.target.value,
      });
      handleChange(e);
    }
  };
  const validateMessage = (e) => {
    const strongRegex = new RegExp(
      "(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})"
    );

    if (!strongRegex.test(e.target.value)) {
      setFormData({
        ...formData,
        messageValid: false,
        message: e.target.value,
      });
      handleChange(e);
    } else {
      setFormData({ ...formData, messageValid: true, message: e.target.value });
      handleChange(e);
    }
  };
  console.log(book);

  console.log(bookingData);
  // console.log;
  const handleChange = (e) => {
    // console.log;
    setBookingData({
      ...bookingData,
      acf: {
        ...bookingData.acf,

        details: {
          ...bookingData.acf.details,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  return (
    <>
      <div className="checkout-form">
        <form action="" className="form">
          <div className="inputs">
            <div className="userdtl-inputrow">
              <div class="input-field">
                <label for="firstname">{!al ? "Name" : "Emri"}</label>
                <input
                  type="text"
                  required
                  name="firstname"
                  value={formData.name}
                  onChange={(e) => {
                    validateUsername(e);
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    textAlign: "left",
                    width: "300px",
                  }}
                >
                  {formData.nameValid ? "" : "Ju lutem shënoni një emër valid!"}
                </p>
              </div>
              <div class="input-field">
                <label for="lastname">{!al ? "Last Name" : "Mbiemri"}</label>
                <input
                  type="text"
                  required
                  name="lastname"
                  value={formData.lastName}
                  onChange={(e) => {
                    validateLastname(e);
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    textAlign: "left",
                    width: "300px",
                  }}
                >
                  {formData.lastNameValid
                    ? ""
                    : "Ju lutem shënoni një mbiemër valid"}
                </p>
              </div>
            </div>

            <div className="userdtl-inputrow">
              <div class="input-field">
                <label for="phone">{!al ? "Number" : "Numri"}</label>
                <input
                  type="text"
                  required
                  name="phone"
                  value={formData.number}
                  onChange={(e) => {
                    validateNumber(e);
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    textAlign: "left",
                    width: "300px",
                  }}
                >
                  {formData.numberValid
                    ? ""
                    : "Ju lutem shënoni një numër telefoni valid"}
                </p>
              </div>
              <div class="input-field">
                <label for="email">{!al ? "Email" : "Email"}</label>
                <input
                  type="email"
                  value={formData.email}
                  required
                  name="email"
                  // className={emailError ? "" : "error"}
                  onChange={(e) => {
                    validateEmail(e);
                  }}
                />{" "}
                {!formData.mailError ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      textAlign: "left",
                      width: "300px",
                    }}
                  >
                    {!al
                      ? "Please enter a valid email"
                      : "Ju lutem shënoni një email valid"}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="userdtl-inputrow">
              <div class="input-field">
                <label for="message">{!al ? "message" : "message"}</label>
                <input
                  type="textarea"
                  rows={4}
                  value={formData.message}
                  name="message"
                  // className={emailError ? "" : "error"}
                  onChange={validateMessage}
                />
              </div>
            </div>
            <div>
              <div
                className="agreement"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  name="termsPrivacy"
                  className="checkbox"
                  required
                  onClick={clickAgreement}
                  value={false}
                  disabled={formData.email === null}
                  checked={formData.accepted}
                  // defaultValue={true}
                  onChange={() => {
                    setFormData({ ...formData, accepted: !acceptedT });
                  }}
                />
                <p>
                  {" "}
                  {!al ? "I agree to the " : "Pajtohem me "}
                  <span>
                    <a href="https://dukagjini.blackbird.marketing/temrs-and-conditions">
                      {" "}
                      {!al ? "Terms of Use " : "Termet e përdorimit "}
                    </a>
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
