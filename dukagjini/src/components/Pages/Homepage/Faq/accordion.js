import React, { useState } from "react";
import "./Faq.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [style, setStyle] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="plusminus">
          {isActive ? <p id="minus">-</p> : <p id="plus">+</p>}
        </div>
      </div>
      {isActive}
      {isActive && <div className="accordion-content">{content}</div>}
      <hr className="accordionHr" />
    </div>
  );
};

export default Accordion;
