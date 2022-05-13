import React from "react";
import Accordion from "./accordion";
import "./Faq.css";
function Faq({ posts }) {
  const accordionData = [
    {
      title: posts[2].acf.faqs[0].question,
      content: posts[2].acf.faqs[0].answer,
    },
    {
      title: posts[2].acf.faqs[1].question,
      content: posts[2].acf.faqs[1].answer,
    },
    {
      title: posts[2].acf.faqs[2].question,
      content: posts[2].acf.faqs[2].answer,
    },
    {
      title: posts[2].acf.faqs[3].question,
      content: posts[2].acf.faqs[3].answer,
    },
  ];
  return (
    <>
      <div className="faqs">
        <div className="containerWrapper">
          <h1
            style={{ textAlign: "center", fontSize: "28px", fontWeight: "400" }}
          >
            FAQ
          </h1>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Faq;
