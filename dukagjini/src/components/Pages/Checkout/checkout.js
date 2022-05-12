import React, { useState } from "react";
import { Link } from "react-router-dom";
import Thankyou from "../Thankyou/Thankyou";
import "./checkout.css";
// import { Addresses } from "./addresses";
import { Summary } from "./summary";
import { Userdetails } from "./userdetails";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    product: [],
    number: "",
    // email: localStorage.getItem("email"),
    accepted: false,
    connections: {},
    mailError: true,
    nameValid: true,
    lastNameValid: true,
    numberValid: true,
  });
  const [page, setPage] = useState(0);

  const showForm = () => {
    switch (page) {
      case 0:
        return <Userdetails formData={formData} setFormData={setFormData} />;
      case 1:
        return <Summary />;

      case 2:
        return <Thankyou />;
    }
  };
  const [style, setStyle] = useState("cont");
  const changeStyle = () => {
    setStyle("none");
  };

  const showDesc = () => {
    switch (page) {
      case 0:
        return (
          <>
            {" "}
            <h2>Customer Details</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc ut <br></br>labore et dolore magna aliqua. Ut
              enim ad minim veniam,Lorem ipsum dolor sit ame.
            </p>
          </>
        );
      case 1:
        return (
          <>
            {" "}
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc ut <br></br>labore et dolore magna aliqua. Ut
              enim ad minim veniam,Lorem ipsum dolor sit ame.
            </p>
          </>
        );
      case 2:
        return (
          <>
            {" "}
            <h2>Summary</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc ut <br></br>labore et dolore magna aliqua. Ut
              enim ad minim veniam,Lorem ipsum dolor sit ame.
            </p>
          </>
        );
    }
  };
  const [required, setRequired] = useState(false);

  return (
    <>
      <div className="checkout">
        {showDesc()}
        {showForm()}
        {required ? (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Ju lutem plotësoni të gjitha fushat në mënyrë të saktë!
          </p>
        ) : (
          ""
        )}

        <div
          className="checkout-btns"
          style={{
            display: page === 2 ? "none" : "block",
          }}
        >
          <button
            id="finalBtn"
            className="form-button "
            type="submit"
            onClick={() => {
              // if (page === 2) {
              //   window.location = "/";
              // } else {
              //   setPage(page + 1);
              // }
              if (
                formData.name === "" ||
                formData.lastName === "" ||
                formData.email === "" ||
                formData.number === ""
              ) {
                setRequired(true);
              } else {
                setRequired(false);
                setPage(page + 1);
              }
            }}
          >
            Continue
          </button>

          <button
            className="back-button default-button"
            onClick={() => {
              if (page === 0) {
                window.location = "/checkout";
              } else {
                setPage(page - 1);
              }
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}
export default Checkout;
