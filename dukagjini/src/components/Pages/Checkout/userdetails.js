import React from "react";

import "./checkout.css";
export function Userdetails(props) {
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

              <div class="input-field">
                <label for="number">Number</label>
                <input type="number" name="number" id="" placeholder="Number" />
              </div>
            </div>

            <div>
              <div class="input-field">
                <label for="surname">Surname</label>
                <input type="text" name="surname" placeholder="Surname" />
              </div>

              <div class="input-field">
                <label for="email">Email</label>
                <input type="email" name="email" id="" placeholder="Email" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
