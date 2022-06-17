import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./question.css";

function Question({ question }) {
  //   console.log(question);
  const [showAnswer, setShowAnswer] = useState(false);

  function showAnswerToggle() {
    setShowAnswer(!showAnswer);
  }
  return (
    <div className="container">
      {question.map((data) => (
        <div className="card w-80 m-3">
          <h3 className="card-header">{data.question}</h3>
          <div className="card-body">
            {showAnswer && <p className="card-text">{data.answer}</p>}

            <button className="btn btn-primary" onClick={showAnswerToggle}>
              {!showAnswer ? <div>Show Answer</div> : <div>Hide Answer</div>}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Question;
