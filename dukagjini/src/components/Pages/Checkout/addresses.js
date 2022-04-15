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
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
            </div>

            <div>
              <div class="input-field">
                <label for="surname">Surname</label>
                <input type="text" name="surname" placeholder="Surname" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
