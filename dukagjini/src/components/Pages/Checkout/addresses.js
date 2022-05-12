import React from "react";

import "./checkout.css";
export function Addresses({ formData, setFormData }) {
  const validateAddress = (address) => {
    const strongRegex = new RegExp("^[a-z A-Z'-]+$");

    if (!strongRegex.test(address)) {
      setFormData({ ...formData, addressValid: false, address: address });
    } else {
      setFormData({ ...formData, addressValid: true, address: address });
    }
  };
  const validateCity = (city) => {
    const strongRegex = new RegExp("^[a-z A-Z'-]+$");

    if (!strongRegex.test(city)) {
      setFormData({ ...formData, cityValid: false, city: city });
    } else {
      setFormData({ ...formData, cityValid: true, city: city });
    }
  };

  return (
    <>
      <div className="checkout-form">
        <form action="" className="form">
          <div className="inputs">
            <div>
              <div class="input-field">
                <label for="address">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  value={formData.address}
                  onChange={(e) => {
                    validateAddress(e.target.value);
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
                  {formData.addressValid ? "" : "Enter a valid address!"}
                </p>
              </div>
            </div>

            <div>
              <div class="input-field">
                <label for="city">City</label>
                <input
                  type="text"
                  name="City"
                  placeholder="City"
                  required
                  value={formData.city}
                  onChange={(e) => {
                    validateCity(e.target.value);
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
                  {formData.cityValid ? "" : "Enter a valid city!"}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
