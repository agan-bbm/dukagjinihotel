import React from "react";
import { Link } from "react-router-dom";
import "./Thankyou.css";
import tick from "../../../images/Tick.svg";
function Thankyou({ posts }) {
  console.log(posts);
  return (
    <>
      <div className="tu-container">
        <img src={tick} alt="" />
        <h2 className="tu-heading">{posts.heading}</h2>
        <p className="tu-paragraph">{posts.paragraph}</p>
        <p className="tu-contact">
          <span>{posts.phone}</span> | <span>{posts.email}</span>
        </p>

        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <p className="tu-back">{posts.backtohomepage}</p>
        </Link>
      </div>
    </>
  );
}
export default Thankyou;
