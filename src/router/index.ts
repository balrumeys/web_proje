import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kadin",
      name: "kadin",
      component: () => import("../views/kadin.vue"),
    },
    {
      path: "/erkek",
      name: "erkek",
      component: () => import("../views/erkek.vue"),
    },
    {
      path: "/cocuk",
      name: "cocuk",
      component: () => import("../views/cocuk.vue"),
    },
    {
      path: "/kayakkabilar",
      name: "kayakkabilar",
      component: () => import("../views/kayakkabilar.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
  ],
});

export default router;
