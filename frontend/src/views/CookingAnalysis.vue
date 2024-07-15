<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-4xl font-bold mb-4 text-center text-purple-700">
      <i class="fas fa-chart-pie mr-2"></i> りょうりをぶんせきする
    </h2>
    <p class="text-center text-lg mb-4 text-gray-600">
      AIにりょうりをぶんせきさせよう🔍
    </p>
    <input type="file" @change="onFileSelected" accept="image/*" />
    <br />
    <button
      @click="uploadFile"
      :disabled="!selectedFile || isLoading"
      class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-8"
    >
      {{ isLoading ? "アップロード中..." : "アップロード" }}
    </button>
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

const onFileSelected = (event) => {
  selectedFile.value = event.target.files[0];
};

const uploadFile = async () => {
  if (!selectedFile.value) return;

  isLoading.value = true;

  try {
    const reader = new FileReader();
    reader.onload = async (e) => {
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

      isLoading.value = false;
      await fetchFoods(); // アップロード後にデータを再取得
    };
    reader.readAsDataURL(selectedFile.value);
  } catch (error) {
    console.error("アップロードエラー:", error);
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
