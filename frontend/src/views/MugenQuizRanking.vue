<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-3xl font-bold mb-4 text-center text-purple-700 sm:text-4xl">
      <i class="fas fa-trophy mr-2"></i> クイズランキングをみる
    </h2>
    <div class="overflow-x-auto min-h-[50vh]">
      <div
        v-if="loading"
        class="text-center h-full flex items-center justify-center"
      >
        <i class="fas fa-spinner fa-spin text-8xl text-purple-700"></i>
      </div>
      <table
        v-else
        class="w-full bg-white rounded-lg overflow-hidden shadow-lg mt-8"
      >
        <thead class="bg-purple-200">
          <tr>
            <th class="px-4 py-3 text-left text-xl">順位</th>
            <th class="px-4 py-3 text-left text-xl">ユーザー名</th>
            <th class="px-4 py-3 text-left text-xl">レベル</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in rankings"
            :key="user.id"
            :class="{ 'bg-yellow-100': user.id === currentUserId }"
          >
            <td class="px-4 py-3 text-lg">{{ index + 1 }}</td>
            <td class="px-4 py-3 text-lg">
              {{ user.id === currentUserId ? "あなた" : "せかいのだれか" }}
              <i
                v-if="user.id === currentUserId"
                class="fas fa-user ml-2 text-blue-500"
              ></i>
            </td>
            <td class="px-4 py-3 text-lg">{{ user.level }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getQuizLevelTop10 } from "@/api/mugen_quiz";
import { useUserStore } from "@/stores/user";

const rankings = ref([]);
const loading = ref(true);
const userStore = useUserStore();

const currentUserId = computed(() => userStore.uid);

onMounted(async () => {
  try {
    const response = await getQuizLevelTop10();
    rankings.value = response.top_10;
  } catch (error) {
    console.error("ランキングの取得に失敗しました:", error);
  } finally {
    loading.value = false;
  }
});
</script>
