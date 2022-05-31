import React from "react";
import "./restaurant.css";
function Restaurant({ posts }) {
  console.log(posts);
  return (
    <>
      <div className="custom-pages">
        <div
          className="restaurant-banner"
          style={{ backgroundImage: `url(${posts.acf.restaurant.banner})` }}
        ></div>
        <div className="containerWrapper">
          <h2 className="cp-heading">{posts.acf.restaurant.mainheading}</h2>

          <div className="single-gallery">
            <div className="cp-textfield">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                  ornare non elementum, placerat. Sapien mattis dui risus
                  tristique natoque nunc sed pellentesque congue. Praesent et
                  elit at ullamcorper cursus eros arcu. Risus ipsum aliquet
                  lacus amet, quam augue. Nisl vitae eu quis aenean proin ornare
                  pellentesque mauris. Eleifend elementum, at bibendum dui
                  curabitur quis eu magna.
                </p>
              </div>
              <div>
                <img src={posts.acf.restaurant.restorani22.image1} alt="" />
              </div>
            </div>
            <div className="cp-images">
              <div className="cp-img">
                <img
                  className="img-top"
                  src={posts.acf.restaurant.restorani22.image2}
                  alt=""
                />
              </div>
              <div className="cp-img">
                <img src={posts.acf.restaurant.restorani22.image3} alt="" />
              </div>
            </div>
            <div className="cp-bottom">
              <p className="cp-bottom-p">
                During your stay, we will take care for your wellbeing aswell.
                We do this by offering the pool, spa and fitness restaurant rich
                in drinks and delicious food, as well as other services based on
                your preferences. Your stay with us is what we cherish the most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Restaurant;
