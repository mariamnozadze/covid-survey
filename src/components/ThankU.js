import React from "react";
import "../App.css";
import star from "./imgs/logos/Vector2.png";

const ThankU = () => {
  return (
    <div className="Ending_page">
      <div className="thank_u">
        <p>მადლობა</p>
      </div>

      <div className="left_star">
        <img src={star} alt="star"></img>
      </div>
      <div className="right_star">
        <img src={star} alt="star"></img>
      </div>
    </div>
  );
};

export default ThankU;
