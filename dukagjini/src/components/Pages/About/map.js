import React from "react";
const AddressMap = () => {
  return (
    <div className="google-map-code" style={{ height: "100%", width: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2074.711502478419!2d20.28960238870774!3d42.65955104469002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352fdc983b4c723%3A0xa31668c3b736df76!2sHotel%20Dukagjini!5e0!3m2!1sen!2s!4v1651222058892!5m2!1sen!2s"
        width="100%"
        height="100%"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};
export { AddressMap };
