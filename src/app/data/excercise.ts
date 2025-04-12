// exercises.ts
export type Exercise = {
  id: string;
  name: string;
  // todo:筋トレ、有酸素両方を提案するのもあったらいいかも
  type: typeof TRAINING | typeof AEROBIC;
  // part: "全身" | "上半身" | "下半身";
  durationSec: number; // 実行時間（秒）
  description: string;
};

const TRAINING = "筋トレ";
const AEROBIC = "有酸素";

// メニューや時間は仮
// todo:メニュー任意で追加できたら面白そう
export const exercises: Exercise[] = [
  {
    id: "jumping-jacks",
    name: "ジャンピングジャック",
    type: AEROBIC,
    // part: "全身",
    durationSec: 30,
    description: "両足を広げてジャンプしながら両手を頭の上で叩く運動",
  },
  {
    id: "udefuri",
    name: "腕振り",
    type: AEROBIC,
    // part: "全身",
    durationSec: 40,
    description: "その場で全力で腕を振る運動",
  },
  {
    id: "squat",
    name: "スクワット",
    type: TRAINING,
    // part: "下半身",
    durationSec: 40,
    description: "足を肩幅に開いて腰を落とすトレーニング",
  },
  {
    id: "push-up",
    name: "腕立て伏せ",
    type: TRAINING,
    // part: "上半身",
    durationSec: 30,
    description: "胸・腕を鍛える基本的な自重トレーニング",
  },
  {
    id: "plank",
    name: "プランク",
    type: TRAINING,
    durationSec: 30,
    description: "胸・腕を鍛える基本的な自重トレーニング",
  },
  {
    id: "joutai",
    name: "上体起こし",
    type: TRAINING,
    durationSec: 30,
    description: "腹筋を鍛える基本的な自重トレーニング",
  },
  {
    id: "haikin",
    name: "背筋",
    type: TRAINING,
    durationSec: 30,
    description: "背筋を鍛える基本的な自重トレーニング",
  },
  // ...他にも10種目ほど追加
];
