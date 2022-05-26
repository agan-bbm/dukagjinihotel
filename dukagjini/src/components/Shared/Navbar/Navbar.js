import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import Dropdown from "react-dropdown";

import { US, AL } from "country-flag-icons/react/3x2";
import Al from "../../../images/AL.svg";
import En from "../../../images/EN.svg";
//  ICONS

// CSS
import "./navbar.css";
import "react-dropdown/style.css";

// IMAGES

import logo_2 from "../../Utils/logo_2";
import imgllogo from "../../../images/mobilellogo.png";

function Navbar({ al, setAl }) {
  console.log(al);
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

  const options = [al ? <img src={En}></img> : <img src={Al}></img>];
  const defaultOption = <img src={En}></img>;
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
            to="/our-rooms"
            className={!navbar ? "white-links" : " black-links white-links "}
          >
            {al ? "Dhomat" : "Rooms"}
          </Link>

          <Link
            to="/about"
            className={!navbar ? "white-links" : " black-links white-links "}
          >
            {al ? "Rreth nesh" : "About"}
          </Link>
        </div>

        {visible && (
          <div className="mobile-menu">
            <div className="SvgLogo" id="logomobile-burger">
              <Link to="/" className="logo-link">
                <img src={imgllogo} alt="" />
              </Link>
            </div>
            <div
              className="mobile-menu-div"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <p className="mobile-menu-link">
                <Link to="/our-rooms">{al ? "Dhomat" : "Rooms"}</Link>
              </p>
              <p className="mobile-menu-link">
                <Link to="/about">{al ? "Restaurant" : "Restaurant"}</Link>
              </p>
              <p className="mobile-menu-link">
                <Link to="/about">{al ? "Rreth nesh" : "About"}</Link>
              </p>
              <p className="mobile-menu-link">
                <Link to="/contact">{al ? "Kontaki" : "Contact"}</Link>
              </p>
              <p className="mobile-menu-link" id="bookBtnMob">
                <Link to="/booking">{al ? "REZERVO" : "BOOK NOW"} </Link>
              </p>
              <Dropdown
                options={options}
                onChange={() => {
                  setAl(!al);
                }}
                placeholder={defaultOption}
                className="translate-mobile"
              />
              {/* <Dropdown
                options={options}
                onChange={() => {
                  setAl(!al);
                }}
                value={defaultOption}
                placeholder={defaultOption}
                className="translate-mobile"
              /> */}
            </div>
          </div>
        )}
        <Link
          to="/booking"
          className={
            !navbar
              ? "white-button book-now-btn"
              : "white-button black-button book-now-btn"
          }
        >
          {al ? "Rezervo" : "Book Now"}
        </Link>
        <Dropdown
          options={options}
          onChange={() => {
            setAl(!al);
          }}
          placeholder={defaultOption}
          className="translate-desktop"
        />
        <div className="burger-icon-button">{button()}</div>
      </div>
      {/* <hr className={!navbar ? "white-line" : "black-line white-line"} /> */}
    </div>
  );
}

export default Navbar;
