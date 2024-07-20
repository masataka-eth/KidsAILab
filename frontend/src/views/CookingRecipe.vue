<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-3xl font-bold mb-4 text-center text-purple-700 sm:text-4xl">
      <i class="fas fa-utensils mr-2"></i> りょうりをつくる
    </h2>
    <p class="text-center text-lg mb-4 text-gray-600">
      AIが まほう のレシピを作るゾ🔥
    </p>
    <div v-if="loading" class="text-center">
      <i class="fas fa-spinner fa-spin text-8xl text-purple-700 mt-2"></i>
    </div>
    <div v-else v-show="!recipeLoading && !recipe">
      <p class="text-center text-lg mb-4 text-gray-600">
        ３つの 食ざい をえらぼう！✅
      </p>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(ingredient, index) in ingredients"
          :key="index"
          class="p-4 border rounded-lg shadow-md cursor-pointer relative"
          @click="toggleIngredient(ingredient)"
        >
          <label class="flex items-center w-full h-full cursor-pointer">
            <input
              type="checkbox"
              v-model="selectedIngredients"
              :value="ingredient"
              class="w-6 h-6 mr-2"
              @click.stop
            />
            <span class="flex-1" @click.stop>{{ ingredient }}</span>
          </label>
        </div>
      </div>
      <div class="mt-6 text-center">
        <p class="text-lg mb-2 text-gray-600">あじのタイプをえらぼう！🍽️</p>
        <div class="flex justify-center space-x-4">
          <label
            v-for="type in ajiTypes"
            :key="type"
            class="inline-flex items-center"
          >
            <input
              type="radio"
              v-model="selectedAjiType"
              :value="type"
              class="form-radio h-5 w-5 text-purple-600"
            />
            <span class="ml-2 text-gray-700">{{ type }}</span>
          </label>
        </div>
      </div>
      <button
        @click="fetchRecipe"
        class="w-1/2 min-w-[300px] py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-auto block disabled:opacity-50 disabled:cursor-not-allowed mt-6"
        :disabled="selectedIngredients.length !== 3 || !selectedAjiType"
      >
        まほうのレシピをさくせい👩‍🍳✨
      </button>
    </div>
    <div v-if="recipeLoading" class="text-center mt-4" v-show="!loading">
      <i class="fas fa-spinner fa-spin text-8xl text-purple-700 mt-2"></i>
    </div>
    <div
      v-else-if="recipe"
      class="mt-4 p-4 border rounded-lg shadow-md"
      v-show="!loading"
    >
      <h3 class="text-2xl md:text-3xl font-bold mb-2">
        👩‍🍳✨{{ recipe.title }}
      </h3>
      <br />
      <p class="text-base md:text-lg"><strong>🍎つかった食ざい:</strong></p>
      <p
        class="text-base md:text-lg"
        v-html="recipe.material.join(', ').replace(/\n/g, '<br>')"
      ></p>
      <br />
      <p class="text-base md:text-lg"><strong>🌟レシピないよう:</strong></p>
      <p
        class="text-base md:text-lg"
        v-html="recipe.recipe.replace(/\n/g, '<br>')"
      ></p>
      <br />
      <p class="text-base md:text-lg"><strong>😋どんな味がするのか:</strong></p>
      <p
        class="text-base md:text-lg"
        v-html="recipe.taste.replace(/\n/g, '<br>')"
      ></p>
      <img
        :src="recipe.image"
        alt="レシピイメージ"
        class="mt-4 w-full h-auto max-w-[500px] rounded-lg"
      />
      <button
        @click="resetRecipe"
        class="w-1/2 min-w-[300px] py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-auto block mt-6"
      >
        もういちどレシピを作る
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getMaterials, getRecipes } from "@/api/cooking.ts";

const ingredients = ref([]);
const selectedIngredients = ref([]);
const loading = ref(true);
const recipeLoading = ref(false);
const recipe = ref(null);
const ajiTypes = ["さっぱり", "こってり", "おつまみ"];
const selectedAjiType = ref("");

onMounted(async () => {
  try {
    const response = await getMaterials();
    ingredients.value = response.ingredients;
  } catch (error) {
    console.error("Error fetching materials:", error);
  } finally {
    loading.value = false;
  }
});

const fetchRecipe = async () => {
  recipeLoading.value = true;
  try {
    const response = await getRecipes(
      selectedIngredients.value,
      selectedAjiType.value
    );
    recipe.value = response;
  } catch (error) {
    console.error("Error fetching recipe:", error);
  } finally {
    recipeLoading.value = false;
  }
};

const resetRecipe = async () => {
  recipe.value = null;
  selectedIngredients.value = [];
  selectedAjiType.value = "";
  loading.value = true;
  try {
    const response = await getMaterials();
    ingredients.value = response.ingredients;
  } catch (error) {
    console.error("Error fetching materials:", error);
  } finally {
    loading.value = false;
  }
};

const toggleIngredient = (ingredient) => {
  if (selectedIngredients.value.includes(ingredient)) {
    selectedIngredients.value = selectedIngredients.value.filter(
      (item) => item !== ingredient
    );
  } else {
    selectedIngredients.value.push(ingredient);
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
