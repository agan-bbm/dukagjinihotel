import React from "react";
import BookingSection from "../components/Pages/Booking/BookingSection";

function Booking({ dates, setDates }) {
  return (
    <>
      <BookingSection dates={dates} setDates={setDates} />
    </>
  );
}

export default Booking;
