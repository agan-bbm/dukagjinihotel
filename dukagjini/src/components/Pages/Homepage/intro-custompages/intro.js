import React from "react";
import { Link } from "react-router-dom";
import "./intro.css";

function Intro({ posts, al }) {
  return (
    <>
      <div className="intro">
        <div className="i-restaurant">
          <h2>{!al ? posts.acf.introhome.restaurant.title : "RESTAURANTS"}</h2>
          <div className="containerWrapper">
            <div className="cp-home-intro">
              <div className="cp-intro-left">
                <p>
                  {!al
                    ? posts.acf.introhome.restaurant.paragraph
                    : posts.acf.introhomeal.restaurant.paragraph}
                </p>
                <Link to="/restaurant">
                  <button className="introBtn default-button">
                    View Restaurants
                  </button>
                </Link>

                <img
                  id="landscapeImg"
                  src={
                    !al
                      ? posts.acf.introhome.restaurant.imagelandscape
                      : posts.acf.introhomeal.restaurant.imagelandscape
                  }
                  alt=""
                />
              </div>
              <div className="cp-intro-right">
                <img
                  src={
                    !al
                      ? posts.acf.introhome.restaurant.imageportrait
                      : posts.acf.introhomeal.restaurant.imageportrait
                  }
                  alt=""
                />
                <p>
                  {!al
                    ? posts.acf.introhome.restaurant.miniparagraph
                    : posts.acf.introhomeal.restaurant.miniparagraph}
                </p>
              </div>
            </div>
          </div>
          <div className="minibanner">
            {" "}
            <img
              src={
                !al
                  ? posts.acf.introhome.restaurant.minibanner
                  : posts.acf.introhomeal.restaurant.minibanner
              }
              alt=""
            />
          </div>
        </div>

        <div className="i-wellness">
          <h2 id="wellnes-mainheading">
            {!al
              ? posts.acf.introhome.wellness.title
              : posts.acf.introhomeal.wellness.title}
          </h2>
          <div className="containerWrapper" id="introwellness">
            <div className="cp-home-intro">
              <div className="cp-intro-left">
                <img
                  id="landscapeImg"
                  src={
                    !al
                      ? posts.acf.introhome.wellness.imageportrait
                      : posts.acf.introhomeal.wellness.imageportrait
                  }
                  alt=""
                />
                <p>
                  {!al
                    ? posts.acf.introhome.wellness.paragraph
                    : posts.acf.introhomeal.wellness.paragraph}
                </p>
              </div>
              <div className="cp-intro-right">
                <p>
                  {!al
                    ? posts.acf.introhome.wellness.miniparagraph
                    : posts.acf.introhomeal.wellness.miniparagraph}
                </p>
                <Link to="/spa">
                  <button className="introBtn default-button">
                    {!al ? "Wellness & Fitness" : "Mirëqenie & Shëndet"}
                  </button>
                </Link>

                <img
                  src={
                    !al
                      ? posts.acf.introhome.wellness.imagelandscape
                      : posts.acf.introhomeal.wellness.imagelandscape
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="minibanner">
            {" "}
            <img
              src={
                !al
                  ? posts.acf.introhome.wellness.minibanner
                  : posts.acf.introhomeal.wellness.minibanner
              }
              alt=""
            />
          </div>
        </div>

        <div className="i-wellness">
          <h2>
            {!al
              ? posts.acf.introhome.weddings.title
              : posts.acf.introhomeal.weddings.title}
          </h2>
          <div className="containerWrapper">
            <div className="cp-home-intro" id="weddingintrodiv">
              <div className="cp-intro-left">
                <img
                  id="weddLandImg"
                  src={
                    !al
                      ? posts.acf.introhome.weddings.imageportrait
                      : posts.acf.introhomeal.weddings.imageportrait
                  }
                  alt=""
                />
                <p>
                  {!al
                    ? posts.acf.introhome.weddings.paragraph
                    : posts.acf.introhomeal.weddings.paragraph}
                </p>
              </div>
              <div className="cp-intro-right">
                <p>
                  {!al
                    ? posts.acf.introhome.weddings.miniparagraph
                    : posts.acf.introhomeal.weddings.miniparagraph}
                </p>
                <Link to="/wedding">
                  <button className="introBtn default-button">
                    {!al ? "Venues" : "Sallat tona"}
                  </button>
                </Link>

                <img
                  src={
                    !al
                      ? posts.acf.introhome.weddings.imagelandscape
                      : posts.acf.introhomeal.weddings.imagelandscape
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="minibanner">
            {" "}
            <img
              src={
                !al
                  ? posts.acf.introhome.weddings.minibanner
                  : posts.acf.introhomeal.weddings.minibanner
              }
              alt=""
            />
          </div>
        </div>
        <div className="i-peja">
          <div className="containerWrapper" id="intropeja">
            <div className="cp-home-intro">
              <div className="cp-intro-right">
                <img
                  id="landscapeImg"
                  src={
                    !al
                      ? posts.acf.introhome.peja.imageportrait
                      : posts.acf.introhomeal.peja.imageportrait
                  }
                  alt=""
                />
              </div>
              <div className="cp-intro-left">
                <h2 className="peja-intro-title">
                  {!al
                    ? "Things to do in Peja"
                    : "Gjëra që mund të bëni në Pejë"}
                </h2>
                <Link to="/peja">
                  <button
                    style={{ marginTop: "10px" }}
                    className="introBtn default-button"
                  >
                    {!al ? "Explore Peja" : "Eksploroni Pejën"}
                  </button>
                </Link>
                <p>
                  {!al
                    ? posts.acf.introhome.peja.paragraph
                    : posts.acf.introhomeal.peja.paragraph}
                </p>

                <img
                  src={
                    !al
                      ? posts.acf.introhome.peja.imagelandscape
                      : posts.acf.introhomeal.peja.imagelandscape
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
