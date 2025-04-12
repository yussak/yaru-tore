"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type WorkoutRecord = {
  type: "筋トレ" | "有酸素";
  date: string;
  durationSec: number;
  exercises: {
    id: string;
    name: string;
    durationSec: number;
  }[];
};

export default function WorkoutFinishPage() {
  const [record, setRecord] = useState<WorkoutRecord | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = sessionStorage.getItem("latestWorkout");
    if (!data) {
      router.push("/"); // データがなければTOPに戻す
      return;
    }

    const parsed: WorkoutRecord = JSON.parse(data);

    // localStorage に記録を追加
    const logs = JSON.parse(localStorage.getItem("workoutLogs") || "[]");
    localStorage.setItem("workoutLogs", JSON.stringify([parsed, ...logs]));

    setRecord(parsed);
  }, []);

  if (!record) return null;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 text-center">
      <h1 className="text-2xl font-bold">🎉 お疲れさまでした！</h1>
      <p>
        今日は「{record.type}」を{" "}
        {Math.floor(record.durationSec / 60)}分間やり切りました！
      </p>

      <div className="text-left">
        <h2 className="text-lg font-semibold mb-2">✅ 実施したメニュー：</h2>
        <ul className="space-y-2">
          {record.exercises.map((ex, i) => (
            <li key={ex.id} className="border p-2 rounded">
              {i + 1}. {ex.name}（{ex.durationSec}秒）
            </li>
          ))}
        </ul>
      </div>

      <p className="text-green-600">💾 記録を保存しました！</p>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => router.push("/history")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          履歴を見る
        </button>
        <button
          onClick={() => router.push("/")}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          ホームに戻る
        </button>
      </div>
    </div>
  );
}
