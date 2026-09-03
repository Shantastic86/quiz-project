"use client";

import { Personality, coffeeMap } from "@/app/lib/quizData";

interface ResultsProps {
  scores: Record<Personality, number>;
  totalQuestions: number;
  onRestart: () => void;
}

export default function Results({ scores, totalQuestions, onRestart }: ResultsProps) {
  const sorted = (Object.entries(scores) as [Personality, number][])
    .map(([personality, count]) => ({
      personality,
      percentage: Math.round((count / totalQuestions) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  const top = sorted[0];

  return (
    <div className="bg-white rounded-[32px] p-10 sm:p-12 max-w-[480px] w-full shadow-2xl text-center">
      <span className="inline-block bg-[#FF6B9D] text-white font-extrabold text-sm px-4 py-1.5 rounded-full mb-6 font-[family-name:var(--font-baloo)]">
        Your Results
      </span>
      <h1 className="font-[family-name:var(--font-baloo)] text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2 leading-tight">
        You&apos;re a {top.personality}!
      </h1>
      <p className="text-gray-500 font-semibold mb-8">
        Your coffee: {coffeeMap[top.personality].coffee} — &ldquo;{coffeeMap[top.personality].tagline}&rdquo;
      </p>

      <div className="flex flex-col gap-4 mb-8">
        {sorted.map(({ personality, percentage }) => (
          <div key={personality} className="text-left">
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="font-extrabold text-gray-800 font-[family-name:var(--font-baloo)]">
                {personality}
              </span>
              <span className="font-bold text-[#FF6B9D]">{percentage}%</span>
            </div>
            <div className="w-full h-3 bg-[#FFF4E0] rounded-full overflow-hidden mb-1">
              <div
                className="h-full bg-gradient-to-r from-[#FFD93D] via-[#FF6B9D] to-[#4D96FF] rounded-full transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="text-sm text-gray-500">
              {coffeeMap[personality].coffee}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="bg-[#FF6B9D] text-white font-extrabold text-base px-6 py-3 rounded-[20px] cursor-pointer transition-transform duration-150 hover:scale-105 font-[family-name:var(--font-baloo)]"
      >
        Take the quiz again
      </button>
    </div>
  );
}
