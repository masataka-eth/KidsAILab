<template>
  <div>
    <div
      :class="[
        'w-[300px] bg-white text-gray-500 font-sans p-6 fixed h-full top-0 left-0 z-40 transition-transform duration-300 md:relative md:block md:w-[300px] md:translate-x-0',
        {
          'transform -translate-x-full': !menuStore.isMenuOpen,
          'transform translate-x-0': menuStore.isMenuOpen,
        },
      ]"
    >
      <!-- ロゴアイコン -->
      <img
        src="../assets/logo.png"
        alt="Logo"
        class="top-16 left-4 w-16 h-16"
        style="height: 25px; width: auto"
      />

      <!-- <h2 class="text-xl font-bold mb-4">Menu</h2> -->
      <!-- メニュー閉じるボタン -->
      <button
        @click="menuStore.closeMenu"
        class="md:hidden fixed z-50 top-4 left-[250px] hover-element"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </button>

      <!-- メニューを追加するならこちら -->
      <div class="mt-8"></div>
      <ul>
        <li class="mb-4">
          <router-link
            to="/contents/picture-book-create"
            @click="closeMenu"
            class="block p-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-paper-yellow"
            ><i class="fas fa-pencil-alt mr-2"></i> えほんをつくる</router-link
          >
        </li>
        <li class="mb-4">
          <router-link
            to="/contents/picture-book-read"
            @click="closeMenu"
            class="block p-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-paper-yellow"
            ><i class="fas fa-user-edit mr-2"></i>
            じぶんのえほんをよむ</router-link
          >
        </li>
        <li class="mb-4">
          <router-link
            to="/contents/picture-book-read-public"
            @click="closeMenu"
            class="block p-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-paper-yellow"
            ><i class="fas fa-users mr-2"></i> みんなのえほんをよむ</router-link
          >
        </li>
        <li class="mb-4">
          <hr class="my-4 border-t border-gray-300" />
        </li>
        <li class="mb-4">
          <router-link
            to="/contents/mugen-quiz"
            @click="closeMenu"
            class="block p-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-paper-yellow"
            ><i class="fas fa-question mr-2"></i> むげんクイズ</router-link
          >
        </li>
        <li class="mb-4">
          <router-link
            to="/contents/mugen-quiz-ranking"
            @click="closeMenu"
            class="block p-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-paper-yellow"
            ><i class="fas fa-trophy mr-2"></i> クイズランキング</router-link
          >
        </li>
        <li class="mb-4">
          <hr class="my-4 border-t border-gray-300" />
        </li>
        <li class="mb-4">
          <router-link
            to="/contents/cooking-recipe"
            @click="closeMenu"
            class="block p-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-paper-yellow"
            ><i class="fas fa-utensils mr-2"></i> りょうりをつくる</router-link
          >
        </li>
        <li class="mb-4">
          <router-link
            to="/contents/cooking-analysis"
            @click="closeMenu"
            class="block p-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-paper-yellow"
            ><i class="fas fa-chart-pie mr-2"></i>
            りょうりをぶんせきする</router-link
          >
        </li>
        <li class="mb-4">
          <hr class="my-4 border-t border-gray-300" />
        </li>
        <li class="mb-4">
          <button
            @click="$emit('logout')"
            class="w-full text-left p-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-paper-yellow"
          >
            <i class="fas fa-sign-out-alt mr-2"></i> ログアウト
          </button>
        </li>
      </ul>
      <div class="absolute bottom-4 text-sm text-gray-400">
        Powered by OCT-PATH
      </div>
    </div>

    <!-- ハンバーガーメニューボタン-->
    <button
      v-if="!menuStore.isMenuOpen"
      @click="menuStore.toggleMenu"
      class="fixed z-20 md:hidden top-4 left-4 hover-element"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
// import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";
import { useMenuStore } from "../stores/menu";

export default defineComponent({
  name: "NavigationMenu",
  setup() {
    const router = useRouter();
    // const authStore = useAuthStore();
    const userStore = useUserStore();
    const menuStore = useMenuStore();

    const closeMenu = () => {
      if (window.innerWidth <= 768) {
        // モバイル画面幅の場合のみ
        menuStore.closeMenu();
      }
    };

    const logout = () => {
      userStore.clearUser();
      menuStore.closeMenu();
      router.push({ name: "LoginSns" });
    };
    return { logout, menuStore, closeMenu };
  },
});
</script>

<style scoped>
/* マウスオーバーで青くする */
.hover-element {
  transition: all 0.3s ease;
  border-radius: 50%;
}

.hover-element:hover {
  background-color: rgba(0, 0, 255, 0.1);
  border-radius: 50%;
  transform: scale(1.2);
}
</style>
