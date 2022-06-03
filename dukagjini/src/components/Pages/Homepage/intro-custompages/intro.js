import React from "react";
import { Link } from "react-router-dom";
import "./intro.css";

function Intro({ posts }) {
  return (
    <>
      <div className="intro">
        <div className="i-restaurant">
          <h2>{posts.acf.introhome.restaurant.title}</h2>
          <div className="containerWrapper">
            <div className="cp-home-intro">
              <div className="cp-intro-left">
                <p>{posts.acf.introhome.restaurant.paragraph}</p>
                <Link to="/restaurant">
                  <button className="introBtn default-button">
                    View Restaurants
                  </button>
                </Link>

                <img
                  id="landscapeImg"
                  src={posts.acf.introhome.restaurant.imagelandscape}
                  alt=""
                />
              </div>
              <div className="cp-intro-right">
                <img
                  src={posts.acf.introhome.restaurant.imageportrait}
                  alt=""
                />
                <p>{posts.acf.introhome.restaurant.miniparagraph}</p>
              </div>
            </div>
          </div>
          <div className="minibanner">
            {" "}
            <img src={posts.acf.introhome.restaurant.minibanner} alt="" />
          </div>
        </div>

        <div className="i-wellness">
          <h2>{posts.acf.introhome.wellness.title}</h2>
          <div className="containerWrapper" id="introwellness">
            <div className="cp-home-intro">
              <div className="cp-intro-left">
                <img
                  id="landscapeImg"
                  src={posts.acf.introhome.wellness.imageportrait}
                  alt=""
                />
                <p>{posts.acf.introhome.wellness.paragraph}</p>
              </div>
              <div className="cp-intro-right">
                <p>{posts.acf.introhome.wellness.miniparagraph}</p>
                <Link to="/spa">
                  <button className="introBtn default-button">
                    Wellness Center
                  </button>
                </Link>

                <img src={posts.acf.introhome.wellness.imagelandscape} alt="" />
              </div>
            </div>
          </div>
          <div className="minibanner">
            {" "}
            <img src={posts.acf.introhome.wellness.minibanner} alt="" />
          </div>
        </div>
        <div className="i-peja">
          <div className="containerWrapper" id="intropeja">
            <div className="cp-home-intro">
              <div className="cp-intro-right">
                <img
                  id="landscapeImg"
                  src={posts.acf.introhome.peja.imageportrait}
                  alt=""
                />
              </div>
              <div className="cp-intro-left">
                <p className="peja-intro-title">Things to do in Peja</p>
                <Link to="/peja">
                  <button
                    style={{ marginTop: "10px" }}
                    className="introBtn default-button"
                  >
                    Wellness Center
                  </button>
                </Link>
                <p>{posts.acf.introhome.peja.paragraph}</p>

                <img src={posts.acf.introhome.peja.imagelandscape} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
