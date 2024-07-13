<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-4xl font-bold mb-4 text-center text-purple-700">
      <i class="fas fa-question-circle mr-2"></i> むげんクイズ
    </h2>
    <p class="text-center text-lg mb-4 text-gray-600">
      AIが むげん にクイズを作るゾ🔥
    </p>
    <div class="text-center mb-4">
      <p class="text-xl text-gray-700">いまのレベル: {{ level }}</p>
      <p class="text-xl text-gray-700">ランク: {{ title }}</p>
    </div>
    <p class="text-center text-lg mb-4 text-gray-600">
      ルール：ぜんもんせいかい でレベルアップ⤴️、まちがえばレベルダウン⤵️
    </p>
    <hr class="my-8 border-t-2 border-dashed border-gray-300" />
    <p class="text-center text-lg mb-4 text-gray-600">もんだいをえらぼう！</p>
    <div class="flex flex-wrap justify-center gap-4">
      <div v-if="loading" class="text-center">
        <i class="fas fa-spinner fa-spin text-8xl text-purple-700 mt-2"></i>
      </div>
      <button
        v-for="quiz in quizzes"
        :key="quiz.quizNo"
        v-else
        @click="showQuiz(quiz)"
        class="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
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
const level = ref(0); // 初期値を0からnullに変更
const title = ref("");
const quizzes = ref([]);
const loading = ref(true);

const fetchLevelAndQuizzes = async () => {
  loading.value = true;
  const levelResponse = await getQuizLevel(userStore.uid);
  level.value = levelResponse.level || 0; // レベルが取得できない場合は0を設定
  title.value = getTitleByLevel(level.value);

  const quizResponse = await getQuizByLevel(level.value);
  quizzes.value = quizResponse.quiz;
  loading.value = false;
};

const updateLevelAndQuizzes = async (newLevel) => {
  loading.value = true; // クルクルを表示
  level.value = newLevel;
  await updateQuizLevel(userStore.uid, newLevel); // DBを更新
  await fetchLevelAndQuizzes();
  loading.value = false; // クルクルを非表示
};

const getTitleByLevel = (level) => {
  if (level >= 0 && level <= 5) return "クイズはじめて 🐣";
  if (level >= 6 && level <= 10) return "クイズたんけん 🧭";
  if (level >= 11 && level <= 15) return "クイズがんばや 💪";
  if (level >= 16 && level <= 20) return "クイズちえのわ 🧠";
  if (level >= 21 && level <= 25) return "クイズじょうず 🏅";
  if (level >= 26 && level <= 30) return "クイズたつじん ";
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
  const popup = document.createElement("div");
  popup.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `;

  const content = document.createElement("div");
  content.style.cssText = `
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      max-width: 90%;
      max-height: 90%;
      overflow-y: auto;
    `;

  const question = document.createElement("h2");
  question.textContent = quiz.question;
  question.style.cssText = `
      font-size: 24px;
      margin-bottom: 20px;
    `;

  const choices = document.createElement("div");
  choices.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;

  const answerChoices = Array.isArray(quiz.answerChoices)
    ? quiz.answerChoices
    : Object.values(quiz.answerChoices);

  answerChoices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.style.cssText = `
        background: #4CAF50;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        transition: background 0.3s;
      `;
    button.onmouseover = () => (button.style.background = "#45a049");
    button.onmouseout = () => (button.style.background = "#4CAF50");
    button.onclick = async () => {
      if (index === quiz.correctAnswer) {
        showCustomAlert("せいかいです！おめでとう！🎉", quiz.wisdomInformation);
        document.body.removeChild(popup);
        quizzes.value = quizzes.value.filter((q) => q.quizNo !== quiz.quizNo);
        if (quizzes.value.length === 0) {
          await updateLevelAndQuizzes(level.value + 1); // レベルアップ
        }
      } else {
        showCustomAlert(
          "ざんねん！😢",
          `正解は: ${quiz.correctAnswer + 1}<br><br>${quiz.wisdomInformation}`
        );
        document.body.removeChild(popup);
        await updateLevelAndQuizzes(level.value - 1); // レベルダウン
      }
    };
    choices.appendChild(button);
  });

  content.appendChild(question);
  content.appendChild(choices);
  popup.appendChild(content);
  document.body.appendChild(popup);
};

const showCustomAlert = (title, message) => {
  const alertPopup = document.createElement("div");
  alertPopup.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 1001;
      text-align: center;
      width: 50%; /* デフォルトの横幅 */
    `;

  if (window.innerWidth <= 600) {
    // モバイル表示の時
    alertPopup.style.width = "95%";
  }

  const alertTitle = document.createElement("h2");
  alertTitle.textContent = title;
  alertTitle.style.cssText = `
      font-size: 24px;
      margin-bottom: 10px;
      color: #4CAF50;
    `;

  const alertMessage = document.createElement("p");
  alertMessage.innerHTML = message; // textContentからinnerHTMLに変更
  alertMessage.style.cssText = `
      font-size: 18px;
      margin-bottom: 20px;
    `;

  const closeButton = document.createElement("button");
  closeButton.textContent = "閉じる";
  closeButton.style.cssText = `
      background: #4CAF50;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s;
    `;
  closeButton.onmouseover = () => (closeButton.style.background = "#45a049");
  closeButton.onmouseout = () => (closeButton.style.background = "#4CAF50");
  closeButton.onclick = () => document.body.removeChild(alertPopup);

  alertPopup.appendChild(alertTitle);
  alertPopup.appendChild(alertMessage);
  alertPopup.appendChild(closeButton);
  document.body.appendChild(alertPopup);
};

onMounted(() => {
  fetchLevelAndQuizzes();
});
</script>

<style scoped>
/* 必要に応じて追加のスタイルをここに記述 */
</style>
