import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{question.title}</h4>
        <button className="btn" onClick={() => setShowQuestion(!showQuestion)}>
          {showQuestion ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <div>{showQuestion && <p>{question.info}</p>}</div>
    </article>
  );
};

export default Question;
