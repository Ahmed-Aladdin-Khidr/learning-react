import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex = userAnswers.length;

  const isQuizComplete = currentQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />
  }

  return (
    <div id="quiz">
      <Questions
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
