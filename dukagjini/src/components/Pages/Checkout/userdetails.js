import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./checkout.css";
export function Userdetails({ formData, setFormData, book, al }) {
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
  const validateEmail = (email) => {
    const emailRegex = new RegExp(/\S+@\S+\.\S+/);

    if (emailRegex.test(email) === false) {
      setFormData({ ...formData, mailError: false, email: email });
    } else {
      setFormData({ ...formData, mailError: true, email: email });
    }
  };
  const validateNumber = (number) => {
    const strongRegex = new RegExp(
      "^[+]*[(]{0,1}[0-9_ ]{9,25}[)]{0,1}[-s./0-9]*$"
    );

    if (strongRegex.test(number) === false) {
      setFormData({ ...formData, numberValid: false, number: number });
    } else {
      setFormData({ ...formData, numberValid: true, number: number });
    }
  };
  const validateUsername = (username) => {
    const strongRegex = new RegExp("^[A-Za-z]{3,20}$");

    if (!strongRegex.test(username)) {
      setFormData({ ...formData, nameValid: false, name: username });
    } else {
      setFormData({ ...formData, nameValid: true, name: username });
    }
  };
  const validateLastname = (username) => {
    const strongRegex = new RegExp("^[A-Za-z]{3,20}$");

    if (!strongRegex.test(username)) {
      setFormData({ ...formData, lastNameValid: false, lastName: username });
    } else {
      setFormData({ ...formData, lastNameValid: true, lastName: username });
    }
  };
  return (
    <>
      <div className="checkout-form">
        <form action="" className="form">
          <div className="inputs">
            <div className="userdtl-inputrow">
              <div class="input-field">
                <label for="name">{!al ? "Name" : "Emri"}</label>
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    validateUsername(e.target.value);
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
                <label for="surname">{!al ? "Last Name" : "Mbiemri"}</label>
                <input
                  type="text"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => {
                    validateLastname(e.target.value);
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
                <label for="number">{!al ? "Number" : "Numri"}</label>
                <input
                  type="text"
                  required
                  name="number"
                  value={formData.number}
                  onChange={(e) => {
                    validateNumber(e.target.value);
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
                    validateEmail(e.target.value);
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
                    <Link to="">
                      {" "}
                      {!al ? "Terms of Use " : "Termet e përdorimit "}
                    </Link>
                  </span>{" "}
                  {!al ? "and " : "dhe "}
                  <span>
                    {" "}
                    <Link to="">
                      {!al ? "Privacy Policy" : "Politikat e privatësisë "}
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
