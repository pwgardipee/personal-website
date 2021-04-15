import { createWebHistory, createRouter } from "vue-router";

import Home from "./../views/Home.vue";
import Portfolio from "./../views/Portfolio.vue";
import Resume from "./../views/Resume.vue";
import Project from "./../views/Project.vue";

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
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;