"use client";

import { Exercise } from "@/app/data/excercise";
import { useEffect, useState } from "react";

type Props = {
  exercises: Exercise[];
  onFinish: () => void;
};

export default function WorkoutPlayer({ exercises, onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exercises[0]?.durationSec || 30);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // なんでreturn?ない
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const next = index + 1;
          if (next >= exercises.length) {
            clearInterval(timer);
            onFinish();
          } else {
            setIndex(next);
            setTimeLeft(exercises[next].durationSec);
          }
          return 0;
        }
        return prev - 1;
      });

      setTotalElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [index, isPaused]);

  const current = exercises[index];
  const next = exercises[index + 1];

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4 text-center">
      <p className="text-sm text-gray-500">
        種目 {index + 1} / {exercises.length}（経過 {formatTime(totalElapsed)}）
      </p>

      <h1 className="text-2xl font-bold">{current.name}</h1>

      <div className="text-5xl font-mono">{formatTime(timeLeft)}</div>

      <p className="text-lg mt-4">{current.description}</p>
      {current.point && <p className="text-sm text-blue-500">☑ {current.point}</p>}
      <button 
        onClick={() => setIsPaused(!isPaused)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isPaused ? "▶︎ 再開する" : "⏹ 停止する"}
      </button>
      {next && (
        <p className="text-sm text-gray-600 mt-6">
          次は「{next.name}」 - {next.durationSec}秒
        </p>
      )}
    </div>
  );
}

function formatTime(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
