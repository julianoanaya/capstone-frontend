import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MangasIndex from "../views/MangasIndex.vue";
import MangasNew from "../views/MangasNew.vue";
import MangasShow from "../views/MangasShow.vue";
import MangasEdit from "../views/MangasEdit.vue";
import AnimesIndex from "../views/AnimesIndex.vue";
import AnimesNew from "../views/AnimesNew.vue";
import AnimesShow from "../views/AnimesShow.vue";
import AnimesEdit from "../views/AnimesEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/mangas/new",
    name: "mangas-new",
    component: MangasNew,
  },
  {
    path: "/mangas",
    name: "mangas-index",
    component: MangasIndex,
  },
  {
    path: "/mangas/:id",
    name: "mangas-show",
    component: MangasShow,
  },
  {
    path: "/mangas/:id/edit",
    name: "mangas-edit",
    component: MangasEdit,
  },
  {
    path: "/animes",
    name: "animes-index",
    component: AnimesIndex,
  },
  {
    path: "/animes/new",
    name: "animes-new",
    component: AnimesNew,
  },
  {
    path: "/animes/:id",
    name: "ainmes-show",
    component: AnimesShow,
  },
  {
    path: "/animes/:id/edit",
    name: "animes-edit",
    component: AnimesEdit,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
