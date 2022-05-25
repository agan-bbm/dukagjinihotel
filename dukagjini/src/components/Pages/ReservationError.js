import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/index";
import { Link } from "react-router-dom";

function ReservationError() {
  return (
    <>
      <div className="error-page">
        <h1>Please try again</h1>
        <h2>Something went wrong</h2>
        <Link to="/booking">BOOK NOW</Link>
        <Link to="/update-reservation">Update Reservation</Link>
        <Link to="/delete-reservation">Delete Reservation</Link>
      </div>
    </>
  );
}

export default ReservationError;
