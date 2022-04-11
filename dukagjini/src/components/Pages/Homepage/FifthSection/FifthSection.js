import React from "react";

import recone from "../../../../images/rec1.png";
import rectwo from "../../../../images/rec2.png";
import recthree from "../../../../images/rec3.png";
//CSS
import "./fifthSection.css";

function FifthSection() {
  return (
    <div className="fifthSection">
      <h2>Shërbimet tona!</h2>
      <p>
        Përgjatë qëndrimit tuaj, ne do të kujdesemi për mirëqenien tuaj. Këtë e
        bëjmë duke ofruar pishinë dhe spa, restaurant të pasur me ushqime dhe
        pije nga më të ndryshme si dhe shërbime tjera në bazë preferencave tuaja
      </p>
      <div className="fifthImgs">
        <img src={recone}></img>
        <img src={rectwo}></img>

        <img src={recthree}></img>

        <img src={recone}></img>
      </div>
    </div>
  );
}

export default FifthSection;
