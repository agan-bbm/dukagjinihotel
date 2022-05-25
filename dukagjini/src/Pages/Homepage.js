import React from "react";

import FirstSection from "../components/Pages/Homepage/FirstSection/FirstSection";
import SecondSection from "../components/Pages/Homepage/SecondSection/SecondSection";

import ThirdSection from "../components/Pages/Homepage/ThirdSection/ThirdSection";
import FourthSection from "../components/Pages/Homepage/FourthSection/FourthSection";
import FifthSection from "../components/Pages/Homepage/FifthSection/FifthSection";
import SixthSection from "../components/Pages/Homepage/SixthSection/SixthSection";
import "./homepage.css";
import Faq from "../components/Pages/Homepage/Faq/Faq";

function Homepage({ posts, book, setBook, al }) {
  console.log(posts);
  return (
    <>
      <div className="homepage">
        <FirstSection posts={posts.acf.first} book={book} setBook={setBook} />
        <SecondSection posts={posts.acf.secondbanner} />
        <ThirdSection posts={posts.acf.thirdbanner} />

        <FourthSection posts={posts} al={al} />
        <FifthSection posts={posts.acf.sixthbanner} />
        <SixthSection posts={posts} />
        <Faq posts={posts.acf.faqs} />
      </div>
    </>
  );
}

export default Homepage;
