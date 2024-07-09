<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-4xl font-bold mb-4 text-center text-purple-700">
      <i class="fas fa-question-circle mr-2"></i> むげんクイズ
    </h2>
    <p class="text-center text-lg mb-4">AIが無限にクイズを作ってくれるゾ</p>
    <div class="text-center mb-4">
      <p class="text-xl">現在のレベル: {{ level }}</p>
      <p class="text-xl">称号: {{ title }}</p>
    </div>
    <p class="text-center text-lg mb-4">
      ルール：全問正解でレベルアップ、間違えればレベルダウン
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <button
        v-for="quiz in quizzes"
        :key="quiz.quizNo"
        @click="showQuiz(quiz)"
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        {{ quiz.word }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  getQuizLevel,
  getQuizByLevel,
  updateQuizLevel,
} from "../api/mugen_quiz";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const level = ref(0);
const title = ref("");
const quizzes = ref([]);

const fetchLevelAndQuizzes = async () => {
  const levelResponse = await getQuizLevel(userStore.uid);
  level.value = levelResponse.level;
  title.value = getTitleByLevel(level.value);

  const quizResponse = await getQuizByLevel(level.value);
  quizzes.value = quizResponse.quiz;
};

const getTitleByLevel = (level) => {
  if (level >= 0 && level <= 5) return "クイズはじめて 🐣";
  if (level >= 6 && level <= 10) return "クイズたんけん 🧭";
  if (level >= 11 && level <= 15) return "クイズがんばりや 💪";
  if (level >= 16 && level <= 20) return "クイズちえのわ 🧠";
  if (level >= 21 && level <= 25) return "クイズじょうず 🏅";
  if (level >= 26 && level <= 30) return "クイズたつじん 🥇";
  if (level >= 31 && level <= 35) return "クイズつよい 🦾";
  if (level >= 36 && level <= 40) return "クイズのう 🧙";
  if (level >= 41 && level <= 45) return "クイズシニア 👴";
  if (level >= 46 && level <= 50) return "クイズベテラン 🎖";
  if (level >= 51 && level <= 55) return "クイズマスター 🧩";
  if (level >= 56 && level <= 60) return "クイズグランドマスター 🏆";
  if (level >= 61 && level <= 65) return "クイズエキスパート 🥈";
  if (level >= 66 && level <= 70) return "クイズスペシャリスト 🥉";
  if (level >= 71 && level <= 75) return "クイズウォリアー ⚔️";
  if (level >= 76 && level <= 80) return "クイズナイト 🛡️";
  if (level >= 81 && level <= 85) return "クイズレジェンド 🌟";
  if (level >= 86 && level <= 90) return "クイズタイタン 🗿";
  if (level >= 91 && level <= 95) return "クイズチャンピオン 🏅";
  if (level >= 96 && level <= 99) return "クイズアルティメット 🔥";
  if (level == 100) return "クイズゴッド 👑";
  return "称号なし";
};

const showQuiz = (quiz) => {
  // クイズポップアップ表示ロジックをここに追加
};

onMounted(() => {
  fetchLevelAndQuizzes();
});
</script>

<style scoped>
/* 必要に応じて追加のスタイルをここに記述 */
</style>
