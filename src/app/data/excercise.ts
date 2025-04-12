// exercises.ts
export type Exercise = {
  id: string;
  name: string;
  // todo:筋トレ、有酸素両方を提案するのもあったらいいかも
  type: typeof MUSCLE | typeof AEROBIC;
  // part: "全身" | "上半身" | "下半身";
  durationSec: number; // 実行時間（秒）
  description: string;
  point: string;
};

const MUSCLE = "筋トレ";
const AEROBIC = "有酸素";

const isDebug = false;
// const isDebug = true;

// メニューや時間は仮
// todo:メニュー任意で追加できたら面白そう
export const exercises: Exercise[] = [
  {
    id: "jumping-jacks",
    name: "ジャンピングジャック",
    type: AEROBIC,
    durationSec: isDebug? 1:30,
    description: "両足を広げてジャンプしながら両手を頭の上で叩く運動",
    point: "腕と足をしっかり大きく動かし、リズムよく行いましょう",
  },
  {
    id: "udefuri",
    name: "腕振り",
    type: AEROBIC,
    durationSec: isDebug? 1:40,
    description: "その場で全力で腕を振る運動",
    point: "肘を伸ばして、肩甲骨から動かす意識を持ちましょう",
  },
  {
    id: "squat",
    name: "スクワット",
    type: MUSCLE,
    durationSec: isDebug? 1:40,
    description: "足を肩幅に開いて腰を落とすトレーニング",
    point: "膝がつま先より前に出ないように、お尻を後ろに引くイメージで",
  },
  {
    id: "push-up",
    name: "腕立て伏せ",
    type: MUSCLE,
    durationSec: isDebug? 1:30,
    description: "胸・腕を鍛える基本的な自重トレーニング",
    point: "背中が反らないように、一直線をキープしたまま腕を曲げる",
  },
  {
    id: "plank",
    name: "プランク",
    type: MUSCLE,
    durationSec: isDebug? 1:30,
    description: "体幹を鍛える静止トレーニング",
    point: "腰が落ちたり上がったりしないよう、体をまっすぐ保つ",
  },
  {
    id: "joutai",
    name: "上体起こし",
    type: MUSCLE,
    durationSec: isDebug? 1:30,
    description: "腹筋を鍛える基本的な自重トレーニング",
    point: "勢いを使わず、腹筋を意識してゆっくり上げる",
  },
  {
    id: "haikin",
    name: "背筋",
    type: MUSCLE,
    durationSec: isDebug? 1:30,
    description: "背筋を鍛える基本的な自重トレーニング",
    point: "あごを引き、背中を反らせすぎないように注意",
  },
  // ...他にも10種目ほど追加
];
