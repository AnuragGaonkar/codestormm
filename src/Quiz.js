import React, { useState } from 'react';

function Quiz({ module }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is the first step in creating a budget?',
      options: ['Track your expenses', 'Set financial goals', 'Calculate your income', 'Open a savings account'],
      correctAnswer: 'Calculate your income',
    },
    // Add more questions here
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <section className="quiz">
      <h2>{module.title} Quiz</h2>
      {currentQuestion < questions.length ? (
        <div className="question-card">
          <h3>{questions[currentQuestion].question}</h3>
          <ul className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="quiz-results">
          <h3>Quiz Completed!</h3>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </section>
  );
}

export default Quiz;