export type WorkoutRecord = {
  type: "筋トレ" | "有酸素";
  date: string; // ISO文字列
  durationSec: number;
  exercises: {
    id: string;
    name: string;
    durationSec: number;
  }[];
};
