import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "./daterange.css";

import "react-datepicker/dist/react-datepicker.css";
function Daterange() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("/");
  };
  console.log(formatDate(startDate));
  console.log(formatDate(endDate));
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      monthsShown={2}
      selectsRange
      inline
    />
  );
}

export default Daterange;
