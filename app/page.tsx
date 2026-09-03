"use client";

import { useState } from "react";
import QuizQuestion from "@/app/components/QuizQuestion";
import Results from "@/app/components/Results";
import { questions, Personality } from "@/app/lib/quizData";

const initialScores: Record<Personality, number> = {
  "Bold Adventurer": 0,
  "Sweet Enthusiast": 0,
  "Social Butterfly": 0,
  "Indulgent Treat": 0,
};

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<Personality, number>>(initialScores);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (personality: Personality) => {
    const newScores = { ...scores, [personality]: scores[personality] + 1 };
    setScores(newScores);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScores(initialScores);
    setIsFinished(false);
  };

  return (
    <main className="quiz-gradient-bg min-h-screen flex items-center justify-center p-8">
      {isFinished ? (
        <Results scores={scores} totalQuestions={questions.length} onRestart={handleRestart} />
      ) : (
        <QuizQuestion
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
    </main>
  );
}
