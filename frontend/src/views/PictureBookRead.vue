<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-4xl font-bold mb-4 text-center text-purple-700 mb-12">
      <i :class="pageIcon"></i> {{ pageTitle }}
    </h2>
    <div class="overflow-x-auto">
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="loadingSpinner"></div>
      </div>
      <div v-else>
        <div
          v-if="books.length === 0"
          class="text-center text-xl text-gray-500 py-8"
        >
          えほんはまだないよ。つくってみよう！
        </div>
        <table
          v-else
          class="w-full bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <thead class="bg-purple-200">
            <tr>
              <th class="px-4 py-3 text-left text-xl sm:table-cell hidden">
                つくった日
              </th>
              <th class="px-4 py-3 text-left text-xl">タイトル</th>
              <th class="px-4 py-3 text-center text-xl"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(book, index) in books"
              :key="index"
              class="border-b border-gray-200 hover:bg-purple-50"
            >
              <td class="px-4 py-3 text-lg sm:table-cell hidden">
                {{ formatDate(book.date) }}
              </td>
              <td class="px-4 py-3 text-lg">{{ book.title }}</td>
              <td class="px-4 py-3 text-center">
                <button
                  @click="readBook(book.content_id)"
                  class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap"
                >
                  よむ
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      v-if="!isLoading && books.length > 0 && (hasNextPage || currentPage > 1)"
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
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  defineProps,
  defineExpose,
  watch,
} from "vue";
import { getContentsList, getContentDetail } from "../api/picture_book";
import { useUserStore } from "../stores/user";

const props = defineProps<{
  mode: "personal" | "all";
}>();

const books = ref<any[]>([]);
const currentPage = ref(1);
const hasNextPage = ref(false);

const itemsPerPage = 10;
const isLoading = ref(true);

const userStore = useUserStore();

const fetchBooks = async () => {
  isLoading.value = true;
  try {
    let response;
    console.log("currentPage.value: ", currentPage.value);
    if (props.mode === "personal" && userStore.uid) {
      console.log("fetchBooks__personal");
      response = await getContentsList(currentPage.value, userStore.uid);
    } else {
      console.log("fetchBooks__public");
      response = await getContentsList(currentPage.value);
    }
    books.value = response.contents || [];
    hasNextPage.value = response.hasNextPage || false;
  } catch (error) {
    console.error("Error fetching books:", error);
    books.value = [];
    hasNextPage.value = false;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchBooks);

watch(
  () => props.mode,
  (newMode) => {
    console.log("mode change:", newMode);
    fetchBooks();
  },
  { immediate: true }
);

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchBooks();
  }
};

const nextPage = () => {
  if (hasNextPage.value) {
    currentPage.value++;
    fetchBooks();
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const readBook = async (content_id: string) => {
  console.log(`Reading book with ID: ${content_id}`);
  try {
    // ローディングスピナーを表示
    isLoading.value = true;

    const response = await getContentDetail(content_id);
    console.log("readBook__response: ", response);
    const pages = response.pages;
    const currentPageIndex = ref(0);

    const currentPage = computed(() => {
      return pages[currentPageIndex.value];
    });

    const nextPage = () => {
      if (currentPageIndex.value < pages.length - 1) {
        currentPageIndex.value++;
      }
    };

    const prevPage = () => {
      if (currentPageIndex.value > 0) {
        currentPageIndex.value--;
      }
    };

    // ポップアップを表示する関数
    const showPopup = () => {
      const popup = document.createElement("div");
      popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      `;

      const content = document.createElement("div");
      content.style.cssText = `
        background: #FFF9C4;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
        max-width: 95%;
        max-height: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
      `;

      const closeButton = document.createElement("button");
      closeButton.textContent = "×";
      closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 36px;
        cursor: pointer;
        color: #FF6B6B;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
      closeButton.onclick = () => document.body.removeChild(popup);

      const img = document.createElement("img");
      img.style.display = "none"; // 初期状は非表示
      img.onload = () => {
        // 画像が読み込まれたらスピナーを非表示にし、画像を表示
        isLoading.value = false;
        img.style.display = "block";
      };
      img.src = currentPage.value.page_url;
      img.style.cssText = `
        max-width: 100%;
        height: auto;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 10px;
        margin-bottom: 20px;
      `;

      const buttonContainer = document.createElement("div");
      buttonContainer.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 300px;
      `;

      const pageInfo = document.createElement("div");
      pageInfo.style.cssText = `
        font-size: 18px;
        margin: 0 10px;
      `;
      pageInfo.textContent = `${currentPageIndex.value + 1} / ${pages.length}`;

      const createButton = (text: string, onClick: () => void) => {
        const button = document.createElement("button");
        button.textContent = text;
        button.style.cssText = `
          background: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        `;
        button.onmouseover = () => (button.style.background = "#45a049");
        button.onmouseout = () => (button.style.background = "#4CAF50");
        button.onclick = () => {
          onClick();
          img.src = currentPage.value.page_url;
          pageInfo.textContent = `${currentPageIndex.value + 1} / ${
            pages.length
          }`;
        };
        return button;
      };

      const prevButton = createButton("まえ", prevPage);
      const nextButton = createButton("つぎ", nextPage);

      buttonContainer.appendChild(prevButton);
      buttonContainer.appendChild(pageInfo);
      buttonContainer.appendChild(nextButton);

      content.appendChild(closeButton);
      content.appendChild(img);
      content.appendChild(buttonContainer);
      popup.appendChild(content);
      document.body.appendChild(popup);
    };

    // ポップアップを表示
    showPopup();
  } catch (error) {
    console.error("Error fetching books:", error);
    // エラー時にもスピナーを非表示に
    isLoading.value = false;
  }
};

const pageTitle = computed(() => {
  console.log("props.mode: ", props.mode);
  return props.mode === "personal"
    ? "じぶんのえほんをよむ"
    : "みんなのえほんをよむ";
});

const pageIcon = computed(() => {
  return props.mode === "personal"
    ? "fas fa-user-edit mr-2"
    : "fas fa-users mr-2";
});

defineExpose({
  books,
  currentPage,
  hasNextPage,
  prevPage,
  nextPage,
  formatDate,
  readBook,
  isLoading,
  pageTitle,
});
</script>

<style scoped>
@media (max-width: 600px) {
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

  th.hidden,
  td.hidden {
    display: none;
  }
}

.popup-content {
  max-height: 90vh;
  overflow-y: hidden;
}

img {
  max-height: 80vh;
  object-fit: contain;
}

.loadingSpinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
