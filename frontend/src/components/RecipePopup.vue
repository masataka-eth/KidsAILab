<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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
        @click="$emit('close')"
        class="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        閉じる
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

defineEmits(["close"]);
</script>
