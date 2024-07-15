import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useMenuStore } from "../stores/menu";
import MainLayout from "@/layouts/MainLayout.vue";

import PictureBookCreate from "@/views/PictureBookCreate.vue";
import PictureBookRead from "@/views/PictureBookRead.vue";
import LoginSns from "@/components/LoginSns.vue";
import MugenQuiz from "@/views/MugenQuiz.vue";
import CookingRecipe from "@/views/CookingRecipe.vue";
import CookingAnalysis from "@/views/CookingAnalysis.vue";

const routes = [
  {
    path: "/",
    name: "LoginSns",
    component: LoginSns,
  },
  {
    path: "/contents",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "picture-book-create",
        name: "PictureBookCreate",
        component: PictureBookCreate,
        meta: { requiresAuth: true },
      },
      {
        path: "picture-book-read",
        name: "PictureBookRead",
        component: PictureBookRead,
        meta: { requiresAuth: true },
        props: () => ({ mode: "personal" }),
      },
      {
        path: "picture-book-read-public",
        name: "PictureBookReadPublic",
        component: PictureBookRead,
        meta: { requiresAuth: true },
        props: () => ({ mode: "all" }),
      },
      {
        path: "mugen-quiz",
        name: "MugenQuiz",
        component: MugenQuiz,
        meta: { requiresAuth: true },
      },
      {
        path: "cooking-recipe",
        name: "CookingRecipe",
        component: CookingRecipe,
        meta: { requiresAuth: true },
      },
      {
        path: "cooking-analysis",
        name: "CookingAnalysis",
        component: CookingAnalysis,
        meta: { requiresAuth: true },
      },
      {
        path: "",
        redirect: { name: "PictureBookCreate" }, // デフォルト
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useUserStore();
  const menuStore = useMenuStore();

  if (to.matched.some((record) => record.meta.requiresAuth) && !authStore.uid) {
    // console.log("to.matched.some((record) => record.meta.requiresAuth)");
    // console.log("authStore.uid", authStore.uid);
    // console.log("ログインしていないのでログイン画面へ");
    next({ name: "LoginSns" });
  } else {
    // console.log("ログインしている");
    if (to.name === "LoginSns") {
      menuStore.closeMenu();
    }
    next();
  }
});

export default router;
