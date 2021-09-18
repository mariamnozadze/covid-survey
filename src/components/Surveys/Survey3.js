import React from "react";
import Header from "../Header/Header";
import "./Survey.css";
import doctor from "../imgs/doctor.png";
import { Link } from "react-router-dom";

const Survey3 = () => {
  return (
    <div className="page_container">
      <Header />
      <div className="aligning">
        <form className="left_form">
          <div className="question_box">
            <div className="question">
              <p>უკვე აცრილი ხარ?&#8727;</p>
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
              <p>რას ელოდები?&#8727;</p>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">
                დარეგისტრირებული ვარ და ველოდები რიცხვს
              </label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">არ ვგეგმავ</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">
                გადატანილი მაქვს და ვგეგმავ აცრას
              </label>
            </div>
          </div>
          <div className="advice_box">
            
            <p>
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
              ვაქცინის გაკეთება.
            </p>
            <p> რეგისტრაციის ბმული </p>
            <a href="https://booking.moh.gov.ge">https://booking.moh.gov.ge/</a>
          </div>
        </form>
        <div className="banner">
          <img src={doctor} alt="doctor"></img>
        </div>
      </div>
      <div className="next_page_button">
        <Link to="/Survey4">
          <button>next</button>
        </Link>
      </div>
    </div>
  );
};

export default Survey3;
