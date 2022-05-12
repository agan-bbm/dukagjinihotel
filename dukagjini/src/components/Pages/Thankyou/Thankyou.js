import React from "react";
import { Link } from "react-router-dom";
import "./Thankyou.css";
function Thankyou() {
  return (
    <>
      <div className="tu-container">
        <h2 className="tu-heading">Reservation Completed!</h2>
        <p className="tu-paragraph">
          Your reservation details have just been sent to your email. If you
          have any question, please don't hesitate to contact us. Thank you!
        </p>
        <p className="tu-contact">
          {" "}
          +383 49 766 140 <br /> info@hoteldukagjini.com
        </p>

        <Link to="/">
          <p className="tu-back">Back to Homepage</p>
        </Link>
      </div>
    </>
  );
}
export default Thankyou;
