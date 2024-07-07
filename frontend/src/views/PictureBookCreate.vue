<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-4xl font-bold mb-4 text-center text-purple-700">
      <i class="fas fa-pencil-alt mr-2"></i> えほんをつくる
    </h2>
    <p class="text-gray-500 mb-6 text-lg">
      AI🤖にてつだってもらって、じぶんだけの「えほん」をつくろう💪
      きほんは「きしょうてんけつ」だ🔥
      つくった「えほん」はせかいのみんながみれるよ🌏 はりきってつくろう❤️
    </p>
    <hr class="my-8 border-t-2 border-dashed border-gray-300" />
    <div class="space-y-6">
      <div>
        <label for="ki" class="block text-lg font-bold text-gray-700"
          >✏️ 起（き）：はじまりをかこう</label
        >
        <input
          v-model="ki"
          type="text"
          id="ki"
          class="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="むかしむかし、ある村にタロウという男の子がすんでいました。"
        />
      </div>
      <div>
        <label for="sho" class="block text-lg font-bold text-gray-700"
          >✏️ 承（しょう）：ものがたりをすすめよう</label
        >
        <input
          v-model="sho"
          type="text"
          id="sho"
          class="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="タロウはある日、山へぼうけんにいった。"
        />
      </div>
      <div>
        <label for="ten" class="block text-lg font-bold text-gray-700"
          >✏️ 転（てん）：なにかへんかをおこそう</label
        >
        <input
          v-model="ten"
          type="text"
          id="ten"
          class="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="山の中でタロウはおおきなドラゴンにあった。"
        />
      </div>
      <div>
        <label for="ketsu" class="block text-lg font-bold text-gray-700"
          >✏️ 結（けつ）：おわりをかこう</label
        >
        <input
          v-model="ketsu"
          type="text"
          id="ketsu"
          class="mt-2 block w-full px-4 py-3 border border-gray-3000 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="タロウはドラゴンと村でたのしく一緒にくらしました。"
        />
      </div>
      <button
        @click="createPictureBook"
        :disabled="!isFormValid"
        class="w-1/2 min-w-[300px] py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-auto block disabled:opacity-50 disabled:cursor-not-allowed"
      >
        えほんをつくる🎉✨
      </button>
    </div>

    <div
      v-if="isLoading"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="text-xl mb-4">かんせいするまでじかんがかかるよ🙏</p>
        <div
          class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"
        ></div>
      </div>
    </div>

    <!-- 新しいポップアップ -->
    <div
      v-if="showCompletionPopup"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 class="text-2xl font-bold mb-4">えほんがかんせいしました！🎉✨</h2>
        <p class="mb-4">「えほんをよむ」からよんでみよう。</p>
        <button
          @click="closeCompletionPopup"
          class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          とじる
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { createAndAddContents } from "../api/picture_book";
import { useUserStore } from "../stores/user";

export default defineComponent({
  name: "PictureBookCreate",
  setup() {
    const userStore = useUserStore();

    const ki = ref("");
    const sho = ref("");
    const ten = ref("");
    const ketsu = ref("");

    const isFormValid = computed(() => {
      return (
        ki.value.trim() !== "" &&
        sho.value.trim() !== "" &&
        ten.value.trim() !== "" &&
        ketsu.value.trim() !== ""
      );
    });

    const isLoading = ref(false);
    const showCompletionPopup = ref(false);

    const createPictureBook = async () => {
      if (userStore.uid) {
        isLoading.value = true;
        const textData = `${ki.value} ${sho.value} ${ten.value} ${ketsu.value}`;

        try {
          await createAndAddContents(userStore.uid, textData);
          isLoading.value = false;
          showCompletionPopup.value = true;
        } catch (error) {
          console.error("Error creating picture book:", error);
          isLoading.value = false;
          alert(
            "えほんの作成中にエラーが発生しました。もう一度お試しください。"
          );
        }
      } else {
        console.error("User is not logged in");
        userStore.clearUser();
      }
    };

    const closeCompletionPopup = () => {
      showCompletionPopup.value = false;
    };

    return {
      ki,
      sho,
      ten,
      ketsu,
      isFormValid,
      isLoading,
      showCompletionPopup,
      createPictureBook,
      closeCompletionPopup,
    };
  },
});
</script>

<style scoped>
/* 必要に応じて追加のスタイルをここに記述 */

@media only screen and (max-width: 640px) {
  h2 {
    font-size: 1.5rem; /* h2のサイズを小さく */
  }

  p {
    font-size: 0.9rem; /* 説明文のサイズを小さく */
  }

  label {
    font-size: 1rem; /* ラベルのサイズを小さく */
  }

  input {
    font-size: 0.9rem; /* 入力フィールドの文字サイズを小さく */
  }

  input::placeholder {
    font-size: 0.6rem; /* プレースホルダーの文字サイズをさらに小さく */
  }

  button {
    font-size: 1rem; /* ボタンの文字サイズを小さく */
  }
}
</style>
