import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//  ICONS
import { RiPhoneFill } from "react-icons/ri";

// CSS
import "./navbar.css";

// IMAGES
import Util from "../../Shared/util";
import Logow from "../../../Assets/logo-white.svg";
import Logob from "../../../Assets/logo-black.svg";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setNavbar(window.pageYOffset > 60)
      );
    }
  }, []);

  const logo = () => {
    if (!navbar) {
      return <img src={Logow} alt="logo-white" />;
    } else {
      return <img src={Logob} alt="logo-black" />;
    }
  };
  return (
    <div className={!navbar ? "navbar" : "navbar navbar-active"}>
      <div className="navbar-main-container">
        <RiPhoneFill size={30} color={!navbar ? "white" : "black"} />
        <Link to="/" className="logo-link">
          {logo()}
        </Link>
        <Link
          to="/booking"
          className={!navbar ? "white-button" : "white-button black-button"}
        >
          Book Now
        </Link>
      </div>
      <hr className={!navbar ? "white-line" : "black-line white-line"} />
      <div className="navbar-links">
        <Link
          to="/"
          className={!navbar ? "white-links" : " black-links white-links "}
        >
          Rooms
        </Link>
        <span
          className={!navbar ? "white-dots" : " black-dots white-dots "}
        ></span>

        <Link
          to="/"
          className={!navbar ? "white-links" : " black-links white-links "}
        >
          Lobby
        </Link>
        <span
          className={!navbar ? "white-dots" : " black-dots white-dots "}
        ></span>
        <Link
          to="/"
          className={!navbar ? "white-links" : " black-links white-links "}
        >
          Restaurant
        </Link>
        <span
          className={!navbar ? "white-dots" : " black-dots white-dots "}
        ></span>

        <Link
          to="/"
          className={!navbar ? "white-links" : " black-links white-links "}
        >
          Offers
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
