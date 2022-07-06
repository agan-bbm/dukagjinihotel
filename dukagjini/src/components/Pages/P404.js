import React from "react";
// import Footer from "../../Footer";
// import Navbar from "../Navbar";
// import image from "../../../assets/404.png";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const P404 = ({ posts }) => {
  return (
    <>
      <div className="page404">
        {/* <img src={image} /> */}
        <h1>404 No Page Found </h1>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  );
};

export default P404;
