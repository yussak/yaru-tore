// ここがコアになりそう
"use client";

import { generateWorkout } from "@/app/utils/generateWorkout";
import { useRouter } from "next/navigation";
import WorkoutPlayer from "../components/WorkoutPlayer";
import { WorkoutRecord } from "@/app/types";

export default function WorkoutPlayPage() {
  const router = useRouter();

  // モックで仮にメニュー生成（本来は context などから受け取る）
  const workout = generateWorkout({
    type: "筋トレ",
    totalDurationSec: 5 * 60,
  });

  const handleFinish = () => {
      const record: WorkoutRecord = {
      type: "筋トレ", // 仮の固定値。propsやURLパラメータから渡すのが理想
      date: new Date().toISOString(),
      durationSec: workout.reduce((sum, ex) => sum + ex.durationSec, 0),
      exercises: workout.map((ex) => ({
        id: ex.id,
        name: ex.name,
        durationSec: ex.durationSec,
      })),
    };
  
    // sessionStorage に一時保存
    sessionStorage.setItem("latestWorkout", JSON.stringify(record));

    router.push("/workout/finish");
  };

  return (
    <WorkoutPlayer exercises={workout} onFinish={handleFinish} />
  );
}
