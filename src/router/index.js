import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import List from "@/views/List.vue";
import Search from "@/views/Search.vue";
import CardSet from "@/views/CardSet.vue";
import CustomSet from "@/views/CustomSet.vue";
import Expansion from "@/views/Expansion.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/list",
    name: "List",
    component: List,
    meta: {
      title: "List Cards",
    },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: {
      title: "Search Cards",
    },
  },
  {
    path: "/cardset",
    name: "Card Set",
    component: CardSet,
    meta: {
      title: "Set of 10 Cards",
    },
  },
  {
    path: "/customset",
    name: "Custom Set",
    component: CustomSet,
    meta: {
      title: "Custom Card Set",
    },
  },
  {
    path: "/expansion/:expansionId",
    name: "Expansion",
    props: true,
    component: Expansion,
    meta: {
      title: "Expansion",
    },
  },
  {
    path: "/random",
    name: "Random",
    meta: {
      title: "A Random Card",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Random.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
