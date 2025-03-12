import Question from './question/question.jsx';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const navigate = useNavigate();
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
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  const handleCorrectAnswer = () => {
    setScore(score + 1);
    nextPage(true);
  };

  const handleIncorrectAnswer = () => {
    nextPage(false);
  };

  const nextPage = (isCorrect) => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30); 
    } else {
      if (isCorrect) {
        navigate("/results/" + (score + 1));
      } else {
        navigate("/results/" + score);
      }
    }
  };

  // Timer logic
  useEffect(() => {
    if (timeLeft === 0) {
      handleIncorrectAnswer(); 
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div>
      <h1>Quiz</h1>
      <p>Score: {score}</p>
      <p>Time left: {timeLeft} seconds</p>
      <Question
        question={questions[currentQuestion]}
        onCorrect={handleCorrectAnswer}
        onIncorrect={handleIncorrectAnswer}
      />
    </div>
  );
}

export default Quiz;
