import React from "react";
import Loader from "react-js-loader";
import DukagjiniLoader from "./dukagjinilooper.json";
import Lottie from "react-lottie-player";

function Loader2() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div className={"item"}>
        <Lottie
          loop
          animationData={DukagjiniLoader}
          play
          style={{ width: 150, height: 150 }}
        />
      </div>
    </div>
  );
}

export default Loader2;
