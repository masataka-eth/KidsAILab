<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-3xl font-bold mb-4 text-center text-purple-700 sm:text-4xl">
      <i class="fas fa-list-ul mr-2"></i> みんなのレシピ
    </h2>
    <div class="overflow-x-auto min-h-[50vh]">
      <div
        v-if="isLoading"
        class="text-center h-full flex items-center justify-center"
      >
        <i class="fas fa-spinner fa-spin text-8xl text-purple-700"></i>
      </div>
      <div v-else>
        <div
          v-if="recipes.length === 0"
          class="text-center text-xl text-gray-500 py-8"
        >
          レシピはまだありません。作ってみましょう！
        </div>
        <ul v-else class="space-y-4">
          <li
            v-for="recipe in recipes"
            :key="recipe.id"
            class="flex justify-between items-center bg-white p-4 rounded-lg shadow"
          >
            <div class="flex-grow mr-4">
              <p class="text-base font-semibold sm:text-lg">
                {{ recipe.title }}
              </p>
              <p class="text-xs text-gray-500 sm:text-sm">
                {{ formatDate(recipe.date) }}
              </p>
            </div>
            <button
              @click="openRecipe(recipe)"
              class="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition text-sm sm:text-base w-20 sm:w-24 flex-shrink-0"
            >
              みる
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="
        !isLoading && recipes.length > 0 && (hasNextPage || currentPage > 1)
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

    <RecipePopup
      v-if="selectedRecipe"
      :recipe="selectedRecipe"
      @close="closeRecipe"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getExistingRecipes } from "@/api/cooking";
import RecipePopup from "@/components/RecipePopup.vue";

const recipes = ref([]);
const selectedRecipe = ref(null);
const currentPage = ref(1);
const hasNextPage = ref(false);
const isLoading = ref(true);

const fetchRecipes = async () => {
  isLoading.value = true;
  try {
    const response = await getExistingRecipes(currentPage.value);
    recipes.value = response.recipes || [];
    hasNextPage.value = response.hasNextPage || false;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    recipes.value = [];
    hasNextPage.value = false;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchRecipes);

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchRecipes();
  }
};

const nextPage = () => {
  if (hasNextPage.value) {
    currentPage.value++;
    fetchRecipes();
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const openRecipe = (recipe) => {
  selectedRecipe.value = recipe;
};

const closeRecipe = () => {
  selectedRecipe.value = null;
};
</script>
