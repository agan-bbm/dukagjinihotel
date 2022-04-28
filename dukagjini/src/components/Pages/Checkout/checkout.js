import React, { useState } from "react";
import "./checkout.css";
import { Addresses } from "./addresses";
import { Summary } from "./summary";
import { Userdetails } from "./userdetails";

function Checkout() {
  const [page, setPage] = useState(0);

  const showForm = () => {
    switch (page) {
      case 0:
        return <Userdetails />;
      case 1:
        return <Addresses />;
      case 2:
        return <Summary />;
    }
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
  return (
    <>
      <div className="checkout">
        {showDesc()}
        {showForm()}

        <button
          className="form-button default-button"
          onClick={() => {
            if (page === 2) {
              window.location = "/";
            } else {
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
    </>
  );
}
export default Checkout;
