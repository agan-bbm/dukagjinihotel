import React from "react";
import { Link } from "react-router-dom";
import "./Thankyou.css";
function Thankyou({ posts }) {
  console.log(posts);
  return (
    <>
      <div className="tu-container">
        <h2 className="tu-heading">{posts.heading}</h2>
        <p className="tu-paragraph">{posts.paragraph}</p>
        <p className="tu-contact">
          {posts.phone} <br /> {posts.email}
        </p>

        <Link to="/">
          <p className="tu-back">{posts.backtohomepage}</p>
        </Link>
      </div>
    </>
  );
}
export default Thankyou;
