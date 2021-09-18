import React from "react";
import Header from "../Header/Header";
import "./Survey.css";
import { Link } from "react-router-dom";
import boy from "../imgs/boy.png";

const Survey2 = () => {
  return (
    <div className="page_container">
      <Header />
      <div className="aligning">
        <form className="left_form">
          <div className="question_box">
            <div className="question">
              <p>გაქვს გადატანილი Covid-19?&#8727;</p>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">კი</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">არა</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">ახლა მაქვს</label>
            </div>
          </div>

          <div className="question_box">
            <div className="question">
              <p>ანტისხეულების ტესტი გაქვს გაკეთებული?&#8727;</p>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">კი</label>
            </div>

            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">არა</label>
            </div>
          </div>

          <div className="question_box">
            <div className="question">
              <p>
                მიუთითე მიახლოებითი პერიოდი(დღე/თვე/წელი) როდის გქონდა
                Covid-19?&#8727;
              </p>
            </div>
            <div className="answer_box">
              <input className="covid_date" placeholder="დდ/თთ/წწ"></input>
            </div>
          </div>
        </form>
        <div className="banner">
          <img src={boy} alt="boy"></img>
        </div>
      </div>
      <div className="next_page_button">
        <Link to="/Survey3">
          <button>next</button>
        </Link>
      </div>
    </div>
  );
};

export default Survey2;
