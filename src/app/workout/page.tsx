"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { generateWorkout } from "../utils/generateWorkout";
import { Exercise } from "../data/excercise";

export default function WorkoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [menu, setMenu] = useState<Exercise[]>([]);

  const type = searchParams.get("type") as "筋トレ" | "有酸素";
  const durationMin = Number(searchParams.get("duration"));

  useEffect(() => {
    if (!type || !durationMin) return;

    const workout = generateWorkout({
      type,
      // part: "全身", // 初期は固定
      totalDurationSec: durationMin * 60,
    });

    setMenu(workout);
  }, [type, durationMin]);

  const handleStart = () => {
    // 必要なら menu を state や context に保存して /start へ遷移
    router.push("/start");
  };

  if (!type || !durationMin) return <p>パラメータが不正です</p>;

  const handleRegenerate = () => {
    const newWorkout = generateWorkout({ 
      type, 
      totalDurationSec: durationMin * 60 
    });
    setMenu(newWorkout);
  };
  

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">
        {durationMin}分間の{type}メニュー
      </h1>

      <ul className="space-y-2">
        {menu.map((exercise, index) => (
          <li key={exercise.id} className="p-3 border rounded">
            <p className="font-semibold">{index + 1}. {exercise.name}</p>
            <p className="text-sm text-gray-600">{exercise.description}</p>
            <p className="text-sm mt-1">⏱ {exercise.durationSec}秒</p>
          </li>
        ))}
      </ul>

      <button
        onClick={handleStart}
        className="w-full bg-green-600 text-white p-2 rounded"
      >
        トレーニングを始める
      </button>

      <button onClick={handleRegenerate} className="bg-gray-300 p-2 rounded">
  別のメニューを提案する
</button>

    </div>
  );
}
