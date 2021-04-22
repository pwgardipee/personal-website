import { createWebHistory, createRouter } from "vue-router";

import Home from "./../views/Home.vue";
import Portfolio from "./../views/Portfolio.vue";
import Resume from "./../views/Resume.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          el: to.hash,
          behavior: "smooth",
        });
      }, 500);
    });
  },
  routes,
});

export default router;
