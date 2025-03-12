import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/quiz/quiz';
import StartPage from './components/start/startPage';
import ResultPage from './components/results/resultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results/:score" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;