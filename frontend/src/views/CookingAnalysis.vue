<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-3xl font-bold mb-4 text-center text-purple-700 sm:text-4xl">
      <i class="fas fa-chart-pie mr-2"></i> りょうりをぶんせきする
    </h2>
    <p class="text-center text-lg mb-4 text-gray-600">
      AIにりょうりをぶんせきさせよう🔍
    </p>
    <div class="flex justify-center space-x-4 mt-8">
      <input
        type="file"
        @change="onFileSelected"
        accept="image/*"
        class="hidden"
        ref="fileInput"
      />
      <button
        @click="openCamera"
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        カメラを起動
      </button>
      <button
        @click="openGallery"
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        ギャラリーから選択
      </button>
    </div>
    <!-- <button
      @click="uploadFile"
      :disabled="!selectedFile || isLoading"
      class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
    >
      {{ isLoading ? "アップロード中..." : "アップロード" }}
    </button> -->
    <!-- <div v-if="isLoading" class="text-center mt-4">
      <i class="fas fa-spinner fa-spin text-8xl text-purple-700"></i>
    </div> -->

    <!-- 新しく追加されたテーブル -->
    <div class="overflow-x-auto min-h-[50vh] mt-8">
      <div
        v-if="isLoading"
        class="text-center h-full flex items-center justify-center"
      >
        <i class="fas fa-spinner fa-spin text-8xl text-purple-700"></i>
      </div>
      <div v-else-if="foods && foods.length > 0">
        <table class="w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <thead class="bg-purple-200">
            <tr>
              <th
                class="px-4 py-3 text-left text-sm sm:text-base md:text-lg lg:text-xl hidden sm:table-cell"
              >
                登録した日
              </th>
              <th
                class="px-4 py-3 text-left text-sm sm:text-base md:text-lg lg:text-xl"
              >
                料理名
              </th>
              <th
                class="px-4 py-3 text-center text-sm sm:text-base md:text-lg lg:text-xl hidden sm:table-cell"
              >
                炭水化物
              </th>
              <th
                class="px-4 py-3 text-center text-sm sm:text-base md:text-lg lg:text-xl hidden sm:table-cell"
              >
                タンパク質
              </th>
              <th
                class="px-4 py-3 text-center text-sm sm:text-base md:text-lg lg:text-xl hidden sm:table-cell"
              >
                脂質
              </th>
              <th
                class="px-4 py-3 text-center text-sm sm:text-base md:text-lg lg:text-xl"
              >
                カロリー
              </th>
              <th
                class="px-4 py-3 text-center text-sm sm:text-base md:text-lg lg:text-xl"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(food, index) in foods"
              :key="index"
              class="border-b border-gray-200 hover:bg-purple-50"
            >
              <td class="px-4 py-3 text-lg hidden sm:table-cell">
                <span class="hidden sm:inline">{{
                  formatDate(food.date)
                }}</span>
              </td>
              <td class="px-4 py-3 text-lg">{{ food.dish_name }}</td>
              <td class="px-4 py-3 text-lg text-center hidden sm:table-cell">
                {{ food.total_carbohydrates }}
              </td>
              <td class="px-4 py-3 text-lg text-center hidden sm:table-cell">
                {{ food.total_protein }}
              </td>
              <td class="px-4 py-3 text-lg text-center hidden sm:table-cell">
                {{ food.total_fat }}
              </td>
              <td class="px-4 py-3 text-lg text-center">
                {{ food.total_calories }}
              </td>
              <td class="px-4 py-3 text-center">
                <button
                  @click="showDetails(food)"
                  class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm sm:text-base px-5 py-2.5 text-center inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <span class="sm:hidden text-white">👀</span>
                  <span class="hidden sm:inline whitespace-nowrap">みる</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="text-center text-xl text-gray-500 py-8">
        りょうりのデータはまだないよ。つくってみよう！
      </div>
    </div>

    <!-- ページネーション -->
    <div
      v-if="
        !isLoading &&
        foods &&
        foods.length > 0 &&
        (hasNextPage || currentPage > 1)
      "
      class="mt-6 flex justify-center items-center"
    >
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mr-4 disabled:opacity-50"
      >
        まえ
      </button>
      <span class="text-xl">{{ currentPage }}</span>
      <button
        @click="nextPage"
        :disabled="!hasNextPage"
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full ml-4 disabled:opacity-50"
      >
        つぎ
      </button>
    </div>

    <!-- 新しいモーダルコンポーネント -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <h2 class="text-2xl font-bold mb-4">{{ modalFood.dish_name }}</h2>
        <img
          :src="modalFood.image_url"
          :alt="modalFood.dish_name"
          class="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div class="mb-4">
          <div class="flex justify-between items-center mb-2">
            <p class="font-semibold">
              カロリー: {{ modalFood.total_calories }}kcal
            </p>
          </div>
          <hr class="my-2 border-gray-200 w-full" />
          <div class="flex justify-between items-center">
            <p>
              <span class="font-semibold">炭水物:</span>
              {{ modalFood.total_carbohydrates }}g
            </p>
            <p>
              <span class="font-semibold">タンパク質:</span>
              {{ modalFood.total_protein }}g
            </p>
            <p>
              <span class="font-semibold">脂質:</span>
              {{ modalFood.total_fat }}g
            </p>
          </div>
          <hr class="my-2 border-gray-200 w-full" />
        </div>
        <p class="font-semibold mb-2">材料:</p>
        <p class="mb-4">
          {{ modalFood.ingredients || "材料情報がありません" }}
        </p>
        <button
          @click="showModal = false"
          class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          とじる
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user";
import { uploadFood, getFoodData } from "../api/food_analysis";

const userStore = useUserStore();
const selectedFile = ref(null);
const isLoading = ref(false);
const foods = ref([]);
const currentPage = ref(1);
const hasNextPage = ref(false);
const showModal = ref(false);
const modalFood = ref(null);
const fileInput = ref(null);

const onFileSelected = (event) => {
  const files = event.target.files;
  if (files && files.length > 0) {
    selectedFile.value = files[0];
    uploadFile(); // ファイルが選択されたらすぐにアップロードを開始
  }
};

const uploadFile = async () => {
  if (!selectedFile.value) return;

  isLoading.value = true;

  try {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const fileContent = e.target.result.split(",")[1];
        const originalFileName = selectedFile.value.name;
        const fileExtension = originalFileName.split(".").pop();
        const timestamp = new Date().getTime();
        const newFileName = `${userStore.uid}_${timestamp}.${fileExtension}`;

        const response = await uploadFood(
          userStore.uid,
          newFileName,
          fileContent
        );
        console.log("アップロード成功:", response);

        await fetchFoods(); // アップロード後にデータを再取得
      } catch (error) {
        console.error("アップローー:", error);
        // ここでユーザーにエラーメッセージを表示するなどの処理を追加
      } finally {
        isLoading.value = false;
      }
    };
    reader.readAsDataURL(selectedFile.value);
  } catch (error) {
    console.error("ファイル読み込みエラー:", error);
    isLoading.value = false;
  }
};

const fetchFoods = async () => {
  isLoading.value = true;
  try {
    const response = await getFoodData(userStore.uid, currentPage.value);
    console.log("レスポンス:", response);
    foods.value = response.data;
    hasNextPage.value = response.hasNextPage;
  } catch (error) {
    console.error("食事データの取得エラー:", error);
  } finally {
    isLoading.value = false;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchFoods();
  }
};

const nextPage = () => {
  if (hasNextPage.value) {
    currentPage.value++;
    fetchFoods();
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

const showDetails = (food) => {
  modalFood.value = food;
  showModal.value = true;
};

const openCamera = async () => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      // まず、カメラの権限状態を確認
      const permissionStatus = await navigator.permissions.query({
        name: "camera",
      });

      if (permissionStatus.state === "denied") {
        alert(
          "カメラへのアクセスが拒否されています。ブラウザの設定でカメラへのアクセスを許可してください。"
        );
        return;
      }

      // カメラへのアクセスを要求
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });

      const video = document.createElement("video");
      video.srcObject = stream;
      video.style.width = "100%";
      video.style.height = "auto";
      video.style.maxWidth = "640px";
      video.style.maxHeight = "480px";
      video.autoplay = true;
      video.playsInline = true;

      const createButton = (text, onClick, bgColor) => {
        const button = document.createElement("button");
        button.textContent = text;
        button.style.position = "relative";
        button.style.marginTop = "30px";
        button.style.padding = "10px 20px";
        button.style.fontSize = "16px";
        button.style.backgroundColor = bgColor;
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.style.width = window.innerWidth <= 640 ? "120px" : "200px";
        button.onclick = onClick;
        return button;
      };

      const captureButton = createButton(
        "撮影",
        () => captureImage(video, stream),
        "#4CAF50"
      );
      const cancelButton = createButton(
        "キャンセル",
        () => closeCamera(stream),
        "#f44336"
      );

      const buttonContainer = document.createElement("div");
      buttonContainer.style.display = "flex";
      buttonContainer.style.justifyContent = "center";
      buttonContainer.style.gap = "10px";
      buttonContainer.appendChild(captureButton);
      buttonContainer.appendChild(cancelButton);

      const cameraContainer = document.createElement("div");
      cameraContainer.style.position = "fixed";
      cameraContainer.style.top = "0";
      cameraContainer.style.left = "0";
      cameraContainer.style.width = "100%";
      cameraContainer.style.height = "100%";
      cameraContainer.style.backgroundColor = "black";
      cameraContainer.style.zIndex = "1000";
      cameraContainer.style.display = "flex";
      cameraContainer.style.flexDirection = "column";
      cameraContainer.style.alignItems = "center";
      cameraContainer.style.justifyContent = "center";
      cameraContainer.appendChild(video);
      cameraContainer.appendChild(buttonContainer);

      // 既存のカメラコンテナを削除
      const existingContainer = document.getElementById("camera-container");
      if (existingContainer) {
        existingContainer.remove();
      }

      // 新しいカメラコンテナを追加
      cameraContainer.id = "camera-container";
      document.body.appendChild(cameraContainer);

      // タイトル以外の要素を非��示にする
      const elementsToHide = document.querySelectorAll("body > *:not(h2)");
      elementsToHide.forEach((el) => {
        if (el.id !== "camera-container") {
          el.style.display = "none";
        }
      });

      // ウィンドウサイズが変更されたときにボタンの幅を調整
      const resizeButtons = () => {
        const newWidth = window.innerWidth <= 640 ? "120px" : "200px";
        captureButton.style.width = newWidth;
        cancelButton.style.width = newWidth;
      };

      window.addEventListener("resize", resizeButtons);

      // ビデオの読み込みが完了したらプレイを開始
      video.onloadedmetadata = () => {
        video
          .play()
          .catch((e) => console.error("ビデオの再生に失敗しました:", e));
      };
    } catch (error) {
      console.error("カメラの起動に失敗しました:", error);
      if (error instanceof DOMException && error.name === "NotAllowedError") {
        alert(
          "カメラへのアクセスが拒否されました。ブラウザの設定でカメラへのアクセスを許可してください。"
        );
      } else {
        alert(
          "カメラの起動に失敗しました。デバイスのカメラが正常に動作しているか確認してください。"
        );
      }
    }
  } else {
    console.error("getUserMediaがサポートされていません");
    alert("お使いのブラウザはカメラ機能をサポートしていません。");
  }
};

const captureImage = (video, stream) => {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageDataUrl = canvas.toDataURL("image/jpeg");

  // Blobに変換
  const blob = dataURLtoBlob(imageDataUrl);

  // ファイル名を成
  const fileName = `captured_image_${Date.now()}.jpg`;

  // File オブジェクトを作成
  const file = new File([blob], fileName, { type: "image/jpeg" });

  // selectedFile を更新
  selectedFile.value = file;

  // ストリームを停止
  stream.getTracks().forEach((track) => track.stop());

  // カメラ要素を削除
  const cameraContainer = document.getElementById("camera-container");
  if (cameraContainer) {
    cameraContainer.remove();
  }

  // 非表示にした要素を再表示
  const elementsToShow = document.querySelectorAll("body > *");
  elementsToShow.forEach((el) => {
    el.style.display = "";
  });

  // アップロードを自動的に開始
  uploadFile();
};

// DataURL を Blob に変換する関数
const dataURLtoBlob = (dataURL) => {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

const closeCamera = (stream) => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
  }
  const cameraContainer = document.getElementById("camera-container");
  if (cameraContainer) {
    cameraContainer.remove();
  }
  // 非表示にした要素を再表示
  const elementsToShow = document.querySelectorAll("body > *");
  elementsToShow.forEach((el) => {
    el.style.display = "";
  });
};

const openGallery = () => {
  if (fileInput.value) {
    fileInput.value.removeAttribute("capture");
    fileInput.value.click();
  }
};

onMounted(() => {
  fetchFoods();
});
</script>

<style scoped>
@media (max-width: 640px) {
  table {
    font-size: 14px;
  }

  th,
  td {
    padding: 0.5rem;
  }

  button {
    font-size: 14px;
    padding: 0.5rem 1rem;
  }

  .hidden {
    display: none;
  }
}
</style>
