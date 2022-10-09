import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/form.vue"),
    },
  ],
});


export default router;
