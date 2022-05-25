import React from "react";
import BookingSection from "../components/Pages/Booking/BookingSection";

function Booking({ dates, setDates, book, setBook, al }) {
  return (
    <>
      <BookingSection
        dates={dates}
        setDates={setDates}
        book={book}
        setBook={setBook}
        al={al}
      />
    </>
  );
}

export default Booking;
