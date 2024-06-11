import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MonsterListView from "../views/MonsterListView.vue";
import MonsterDetailView from "../views/MonsterDetailView.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/monsters", name: "Monsters", component: MonsterListView },
  {
    path: "/monsters/:id",
    name: "MonsterDetail",
    component: MonsterDetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
