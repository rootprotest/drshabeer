"use client";

import { useState } from 'react';

const quizData = [
  {
    question: "Which of these is a common symptom of GERD?",
    options: ["Hair Loss", "Heartburn", "Blurry Vision", "Itching"],
    answer: "Heartburn"
  },
  {
    question: "What is the function of the large intestine?",
    options: ["Blood circulation", "Oxygen exchange", "Water absorption", "Hormone production"],
    answer: "Water absorption"
  },
  {
    question: "Which nutrient helps in wound healing?",
    options: ["Vitamin C", "Calcium", "Iron", "Sodium"],
    answer: "Vitamin C"
  },
  {
    question: "When should you consult a doctor for abdominal pain?",
    options: ["After 3 weeks", "Only if there's nausea", "If it’s persistent or severe", "Never"],
    answer: "If it’s persistent or severe"
  }
];

export default function HealthQuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === quizData[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-page-wrapper">
      <div className="quiz-container">
        <h2 className="quiz-title">🧠 Health Awareness Quiz</h2>

        {showResult ? (
          <div className="quiz-result">
            <h3>Your Score: {score} / {quizData.length}</h3>
            <p>{score === quizData.length ? "🎉 Excellent! You’re very aware." : "📘 Keep learning for better health!"}</p>
            <button className="btn restart-btn" onClick={restartQuiz}>Try Again</button>
          </div>
        ) : (
          <div className="quiz-card">
            <h4 className="question">{quizData[current].question}</h4>
            <ul className="option-list">
              {quizData[current].options.map((option, i) => (
                <li
                  key={i}
                  className={`option ${selected === option ? "selected" : ""}`}
                  onClick={() => setSelected(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
            <button className="btn next-btn" disabled={!selected} onClick={handleNext}>
              {current + 1 === quizData.length ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
