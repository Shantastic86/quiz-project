"use client";

import { Question, Personality } from "@/app/lib/quizData";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (personality: Personality) => void;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  const progressPercent = (questionNumber / totalQuestions) * 100;

  return (
    <div className="bg-white rounded-[32px] p-10 sm:p-12 max-w-[480px] w-full shadow-2xl text-center">
      <div className="w-full h-2.5 bg-[#FFF4E0] rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-gradient-to-r from-[#FFD93D] via-[#FF6B9D] to-[#4D96FF] rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <span className="inline-block bg-[#FF6B9D] text-white font-extrabold text-sm px-4 py-1.5 rounded-full mb-6 font-[family-name:var(--font-baloo)]">
        Question {questionNumber} of {totalQuestions}
      </span>
      <h1 className="font-[family-name:var(--font-baloo)] text-2xl sm:text-3xl font-extrabold text-gray-800 mb-8 leading-tight">
        {question.question}
      </h1>
      <div className="flex flex-col gap-3.5">
        {question.answers.map((answer) => (
          <button
            key={answer.text}
            onClick={() => onAnswer(answer.personality)}
            className="bg-[#FFF4E0] border-[3px] border-transparent rounded-[20px] px-5 py-4 font-bold text-base sm:text-lg text-gray-800 cursor-pointer transition-[transform,border-color] duration-150 flex items-center gap-3 outline-none no-underline hover:scale-[1.03] hover:border-[#4D96FF] focus-visible:scale-[1.03] focus-visible:border-[#4D96FF]"
          >
            <span className="text-2xl shrink-0">{answer.emoji}</span>
            <span className="text-left leading-snug">{answer.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
