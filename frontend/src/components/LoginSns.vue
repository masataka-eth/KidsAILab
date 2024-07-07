<template>
  <div class="min-h-screen flex">
    <!-- 左側のコンテンツ -->
    <div
      class="w-full md:w-3/12 flex flex-col justify-center items-center bg-white"
    >
      <img
        src="../assets/logo.png"
        alt="Logo"
        class="absolute top-12 left-4 w-16 h-16"
        style="height: 30px; width: auto"
      />
      <div class="max-w-md w-full p-8" style="margin-top: -300px">
        <h2 class="text-3xl font-bold mb-6 text-left text-purple-700">
          Sign up
        </h2>
        <button
          @click="loginWithGoogle"
          class="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Continue with Google</span>
          <span v-else class="flex items-center justify-center">
            <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </span>
        </button>
      </div>
      <div class="absolute bottom-4 text-sm text-gray-400">
        Powered by OCT-PATH
      </div>
    </div>
    <!-- 右側の画像 -->
    <div class="hidden md:block md:w-9/12 relative">
      <img
        src="../assets/top.jpg"
        alt="Top Image"
        class="absolute left-0 top-0 h-full w-full object-cover object-left"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useUserStore } from "../stores/user";
import signup from "../api/signup";

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const isLoading = ref(false);

    const loginWithGoogle = async () => {
      isLoading.value = true;
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        userStore.setUser(user);
        console.log(
          "Login successful:",
          user.uid,
          user.displayName,
          user.photoURL
        );

        // nullの場合にデフォルト値を使用
        await signup(
          user.uid,
          user.displayName || "匿名ユーザー",
          user.photoURL ||
            "https://www.gravatar.com/avatar/[MD5ハッシュ]?d=mp&s=200"
        );

        await router.push({ name: "PictureBookCreate" });
        console.log("push:", router.currentRoute.value.name);
      } catch (error) {
        console.error("Google Sign-In Error: ", error);
      }
      isLoading.value = false;
    };

    return {
      loginWithGoogle,
      isLoading,
    };
  },
});
</script>

<style scoped>
/* 必要に応じて追加のスタイルをここに記述 */
</style>
