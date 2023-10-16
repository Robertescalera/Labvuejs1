import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ManageView from "../views/ManageView.vue"; // Import the ManageView component

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/manage", // Add a new route for '/manage'
    name: "manage",
    component: ManageView, // Use the ManageView component
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;