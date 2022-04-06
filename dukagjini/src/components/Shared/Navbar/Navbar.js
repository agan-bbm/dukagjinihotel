import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
//  ICONS
import { RiPhoneFill } from "react-icons/ri";

// CSS
import "./navbar.css";

// IMAGES
import Logow from "../../../images/logo-white.svg";
import Logob from "../../../images/logo-black.svg";
import getLogo from "../../Utils/getLogo";
import logo_2 from "../../Utils/logo_2";
//import LogoR from "../../../images/dukagjinihotel-responsive.svg";
import { ReactComponent as SvgLogo } from "../../../images/dukagjinihotel-responsive.svg";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [style, setStyle] = useState("cont");

  const changeStyle = () => {
    setStyle("fixed");
  };
  const changeFixed = () => {
    setStyle("");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setNavbar(window.pageYOffset > 60)
      );
    }
  }, []);
  const button = () => {
    if (visible) {
      return (
        <button
          onClick={() => {
            setVisible(!visible);
            changeFixed();
          }}
          className="burger-icon"
        >
          <Hamburger size={25} />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            setVisible(!visible);
            changeStyle();
          }}
          className="burger-icon"
        >
          <Hamburger size={25} />
        </button>
      );
    }
  };

  const logo = () => {
    return logo_2({ navbar: navbar });
  };
  return (
    <div className={!navbar ? "navbar" : "navbar navbar-active"}>
      <div className="navbar-main-container">
        <div className="SvgLogo">
          <Link to="/" className="logo-link">
            {logo()}
          </Link>
        </div>
        {/* <RiPhoneFill size={30} color={!navbar ? "white" : "black"} /> */}
        <Link to="/" className="logo-link">
          {logo()}
        </Link>
        <div className="navbar-links">
          <Link
            to="/rooms"
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
            to="/about"
            className={!navbar ? "white-links" : " black-links white-links "}
          >
            About
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

        {visible && (
          <div className="mobile-menu">
            <p className="mobile-menu-link">
              <Link to="/aboutus">About</Link>
            </p>
            <p className="mobile-menu-link">
              <Link to="/peek-inside">Rooms</Link>
            </p>
            <p className="mobile-menu-link">
              <Link to="/peek-inside">Restaurant</Link>
            </p>
          </div>
        )}
        <Link
          to="/booking"
          className={!navbar ? "white-button" : "white-button black-button"}
        >
          Book Now
        </Link>
        <div className="burger-icon-button">{button()}</div>
      </div>
      {/* <hr className={!navbar ? "white-line" : "black-line white-line"} /> */}
    </div>
  );
}

export default Navbar;
