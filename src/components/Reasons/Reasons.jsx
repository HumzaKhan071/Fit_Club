import React from "react";
import "./Reasons.css";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";
import nb from "../../assets/nb.png";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>

        <div className="details-r">
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
