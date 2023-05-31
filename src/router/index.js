import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/licensing",
    name: "Licensing",
    component: () =>
      import(/* webpackChunkName: "licensing" */ "../views/Licensing.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    // component: () =>
    //   import(/* webpackChunkName: "resume" */ "../views/Resume.vue"),
    component: Resume,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
