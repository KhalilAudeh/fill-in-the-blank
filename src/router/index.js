import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "gestalt-therapy",
        name: "Gestalt Therapy",
        component: () => import("../views/GestaltTherapy.vue"),
      },
      {
        path: "what-is-gestalt-therapy",
        name: "What Is Gestalt Therapy",
        component: () => import("../views/WhatIsGestaltTherapy.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("../views/About.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  // mode: "history",
  routes,
});

// router.beforeEach((to) => {
//   let language = to.params.lang;
//   if (!language) {
//     language = "norwegian";
//   }
//   i18n.locale = language;
// });


router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = " [ " + to.name + " ]";
  });
});

export default router;
