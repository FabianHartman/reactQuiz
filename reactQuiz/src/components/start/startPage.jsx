import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <button onClick={() => navigate('/quiz')}>Start Quiz</button>
    </div>
  );
}

export default StartPage;