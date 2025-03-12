import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ResultPage() {
  const navigate = useNavigate();
  const { score } = useParams();

  return (
    <div>
      <h1>Thanks for playing</h1>
      <p>Your score was {score}</p>
      <button onClick={() => navigate('/')}>Go back to start</button>
    </div>
  );
}

export default ResultPage;