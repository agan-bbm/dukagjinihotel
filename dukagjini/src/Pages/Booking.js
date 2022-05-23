import React from "react";
import BookingSection from "../components/Pages/Booking/BookingSection";

function Booking({ dates, setDates, book, setBook }) {
  return (
    <>
      <BookingSection
        dates={dates}
        setDates={setDates}
        book={book}
        setBook={setBook}
      />
    </>
  );
}

export default Booking;
