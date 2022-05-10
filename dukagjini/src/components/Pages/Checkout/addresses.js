import React from "react";

import "./checkout.css";
export function Addresses(props) {
  return (
    <>
      <div className="checkout-form">
        <form action="" className="form">
          <div className="inputs">
            <div>
              <div class="input-field">
                <label for="name">Address</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Address"
                />
              </div>
            </div>

            <div>
              <div class="input-field">
                <label for="surname">City</label>
                <input type="text" name="surname" placeholder="City" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
