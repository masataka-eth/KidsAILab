<template>
  <div class="min-h-screen flex">
    <NavigationMenu @logout="logout" />
    <div
      :class="[
        'bg-paper-yellow p-8 transition-all duration-300 flex-grow',
        {
          'md:ml-[1%]': !menuStore.isMenuOpen,
        },
      ]"
    >
      <div class="mt-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { useMenuStore } from "../stores/menu";
import NavigationMenu from "../components/NavigationMenu.vue";

export default defineComponent({
  components: {
    NavigationMenu,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const menuStore = useMenuStore();

    const logout = () => {
      authStore.logout();
      router.push({ name: "LoginSns" });
    };

    return {
      logout,
      menuStore,
    };
  },
});
</script>

<style scoped>
/* 必要に応じて追加のスタイルをここに記述 */
</style>
