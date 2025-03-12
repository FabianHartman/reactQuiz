import Question from "./question";
import React, { useState } from 'react';

function Quiz() {
  const [questions] = useState([
    {
      id: 1,
      questionText: "What is the capital of France?",
      answers: [
        { text: "Paris", isCorrect: true },
        { text: "Berlin", isCorrect: false },
        { text: "Madrid", isCorrect: false },
        { text: "Rome", isCorrect: false }
      ]
    },
    {
      id: 2,
      questionText: "What is 2 + 2?",
      answers: [
        { text: "3", isCorrect: false },
        { text: "4", isCorrect: true },
        { text: "5", isCorrect: false },
        { text: "6", isCorrect: false }
      ]
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleCorrectAnswer = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("The quiz is finished! Restarting...");
      setCurrentQuestion(0);
    }
  };

  return (
    <div>
      <p>Epische quiz</p>
      <Question
        question={questions[currentQuestion]}
        onCorrect={handleCorrectAnswer}
      />
    </div>
  );
}

export default Quiz;