import React, { useState } from "react";

import "./checkout.css";
export function Userdetails({ formData, setFormData }) {
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
                <label for="name">Name</label>
                <input
                  type="text"
                  required
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
                <label for="surname">Surname</label>
                <input
                  type="text"
                  required
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
                <label for="number">Number</label>
                <input
                  type="text"
                  required
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
                <label for="email">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  required
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
                    Ju lutem shënoni një email valid
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
