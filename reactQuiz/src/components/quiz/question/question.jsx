import React, { useState } from 'react';
import "./question.css";

function Question({ question, onCorrect, onIncorrect }) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);

  const handleAnswerClick = (answer, index) => {
    setSelectedAnswerIndex(index); 
    if (answer.isCorrect) {
      setAnswerStatus('correct'); 
    } else {
      setAnswerStatus('incorrect'); 
    }

    setTimeout(() => {
      setSelectedAnswerIndex(null);
      setAnswerStatus(null);
      if (answer.isCorrect) {
        onCorrect(); 
      } else {
        onIncorrect();
      }
    }, 1000);
  };

  return (
    <div>
      <p>{question.questionText}</p>
      {question.answers.map((answer, index) => (
        <button
          key={index}
          className={
            index === selectedAnswerIndex
              ? answerStatus === 'correct'
                ? 'green'
                : 'red'
              : ''
          }
          onClick={() => handleAnswerClick(answer, index)}
        >
          {answer.text}
        </button>
      ))}
    </div>
  );
}

export default Question;