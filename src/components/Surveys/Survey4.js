import React from "react";
import Header from "../Header/Header";
import "./Survey.css";
import bike from "../imgs/bike.png";
import { Link } from "react-router-dom";

const Survey4 = () => {
  return (
    <div className="page_container">
      <Header />
      <div className="aligning">
        <form className="left_form">
          <div className="finishing_quote">
            <p>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი - ჩვენთან გადმოსვლის.
            </p>
            <p>
              პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
              ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
          </div>
          <div className="question_box">
            <div className="question">
              <p>
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?&#8727;
              </p>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">კვირაში ორჯერ</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">კვირაში ერთხელ</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">ორ კვირაში ერთხელ</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">თვეში ერთხელ</label>
            </div>
          </div>

          <div className="question_box">
            <div className="question">
              <p>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?&#8727;</p>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">0</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">1</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">2</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">3</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">4</label>
            </div>
            <div className="answers">
              <input
                type="radio"
                id="answerChoice"
                name="choice"
                value="answer"
              ></input>
              <label for="answerChoice">5</label>
            </div>
          </div>
          <div className="question_box">
            <div className="question">
              <p>უკვე აცრილი ხარ?&#8727;</p>
            </div>
            <div className="input_answer">
              <textarea name="text" className="finishing_answer"></textarea>
            </div>
          </div>
          <div className="question_box">
            <div className="question">
              <p>
                რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
                შეცვლიდი?&#8727;
              </p>
            </div>
            <div className="input_answer">
              <textarea name="text" className="finishing_answer"></textarea>
            </div>
          </div>
          <div className="finish">
            <button>დასრულება</button>
          </div>
        </form>
        <div className="banner">
          <img src={bike} alt="bike"></img>
        </div>
      </div>
      <div className="next_page_button">
        <Link to="/ThankU">
          <button>next</button>
        </Link>
      </div>
    </div>
  );
};

export default Survey4;
