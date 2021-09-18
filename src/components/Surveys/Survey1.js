import React from "react";
import Header from "../Header/Header";
import "./Survey.css";
import people from "../imgs/people.png";
import { Link } from "react-router-dom";

const Survey1 = () => {
  return (
    <div className="page_container">
      <Header />
      <div className="aligning">
        <form className="left_form">
          <div className="user_input">
            <label for="fname">სახელი&#8727;</label>
            <input className="f_name" placeholder="იოსებ" required></input>
          </div>
          <div className="user_input">
            <label for="surname">გვარი&#8727;</label>
            <input className="f_name" placeholder="ჯუღაშვილი" required></input>
          </div>
          <div className="user_input">
            <label for="email">მეილი&#8727;</label>
            <input
              className="f_name"
              placeholder="fbi@redberry.ge"
              required
            ></input>
          </div>
          <div className="input_reminder">
            <div className="line"></div>
            <h5>&#8727;_ით მონიშნული ველების შევსება სავალდებულოა</h5>
          </div>
        </form>
        <div className="banner">
          <img src={people} alt="people"></img>
        </div>
      </div>
      <div className="next_page_button">
        <Link to="/Survey2">
          <button>next</button>
        </Link>
      </div>
    </div>
  );
};

export default Survey1;
