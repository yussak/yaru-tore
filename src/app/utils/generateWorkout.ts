import { exercises, Exercise } from "../data/excercise";

export function generateWorkout({
  type,
  // part,
  totalDurationSec,
}: {
  type: "筋トレ" | "有酸素";
  // part: "全身" | "上半身" | "下半身";
  totalDurationSec: number;
}): Exercise[] {
  const filtered = exercises.filter(
    (e) => e.type === type
    // (e) => e.type === type && (e.part === part || part === "全身")
  );

  const result: Exercise[] = [];
  let accumulated = 0;

  while (filtered.length > 0 && accumulated < totalDurationSec) {
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const exercise = filtered[randomIndex];
    result.push(exercise);
    accumulated += exercise.durationSec;
    filtered.splice(randomIndex, 1);
  }

  return result;
}
