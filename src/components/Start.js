import React from "react";
import Vector from "./imgs/logos/Vector.png";
import { Link } from "react-router-dom";


const Start = () => {
    return (
      <div className="entry">
        <div className="logo">
          <img src={Vector} alt="vector"></img>
        </div>
        <div className="entry_text">
          <Link to="/Survey1">
            <h1>კითხვარის დაწყება</h1>
          </Link>
        </div>
      </div>
    );
};

export default Start;
