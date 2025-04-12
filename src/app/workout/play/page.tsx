// ここがコアになりそう
"use client";

import { generateWorkout } from "@/app/utils/generateWorkout";
import { useRouter } from "next/navigation";
import WorkoutPlayer from "../components/WorkoutPlayer";

export default function WorkoutPlayPage() {
  const router = useRouter();

  // モックで仮にメニュー生成（本来は context などから受け取る）
  const workout = generateWorkout({
    type: "筋トレ",
    totalDurationSec: 5 * 60,
  });

  const handleFinish = () => {
    router.push("/result");
  };

  return (
    <WorkoutPlayer exercises={workout} onFinish={handleFinish} />
  );
}
