"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WorkoutForm() {
  const [type, setType] = useState<"筋トレ" | "有酸素">("筋トレ");
  const [duration, setDuration] = useState(5); // 分単位
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = `?type=${type}&duration=${duration}`;
    router.push(`/workout${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div>
        <label>目的（タイプ）</label>
        <select value={type} onChange={(e) => setType(e.target.value as any)} className="w-full p-2 border">
          <option value="筋トレ">筋トレ</option>
          <option value="有酸素">有酸素</option>
        </select>
      </div>

      {/* 初心者的にはこれ微妙そう */}
      {/* <div>
        <label>鍛えたい部位</label>
        <select value={part} onChange={(e) => setPart(e.target.value as any)} className="w-full p-2 border">
          <option value="全身">全身</option>
          <option value="上半身">上半身</option>
          <option value="下半身">下半身</option>
        </select>
      </div> */}

      <div>
        <label>運動時間（分）</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full p-2 border"
          min={1}
          max={30}
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        メニューを作成する
      </button>
    </form>
  );
}
