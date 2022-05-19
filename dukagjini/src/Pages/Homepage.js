import React from "react";

import FirstSection from "../components/Pages/Homepage/FirstSection/FirstSection";
import SecondSection from "../components/Pages/Homepage/SecondSection/SecondSection";

import ThirdSection from "../components/Pages/Homepage/ThirdSection/ThirdSection";
import FourthSection from "../components/Pages/Homepage/FourthSection/FourthSection";
import FifthSection from "../components/Pages/Homepage/FifthSection/FifthSection";
import SixthSection from "../components/Pages/Homepage/SixthSection/SixthSection";
import "./homepage.css";
import Faq from "../components/Pages/Homepage/Faq/Faq";

function Homepage({ posts }) {
  // console.log(posts);
  return (
    <>
      <div className="homepage">
        <FirstSection posts={posts} />
        <SecondSection posts={posts} />
        <ThirdSection posts={posts} />

        <FourthSection posts={posts} />
        <FifthSection posts={posts} />
        <SixthSection posts={posts} />
        <Faq posts={posts} />
      </div>
    </>
  );
}

export default Homepage;
