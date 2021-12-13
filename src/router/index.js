import Vue from "vue";
import VueRouter from "vue-router";
// import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   redirect: `/${i18n.locale}`,
  // },
  // {
  //   path: "/:lang",
  //   component: {
  //     render(c) {
  //       return c("router-view");
  //     },
  //   },
  //   children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/gestalt-therapy",
        name: "gestalt therapy",
        component: () => import("../views/GestaltTherapy.vue"),
      },
      {
        path: "/what-is-gestalt-therapy",
        name: "what is gestalt therapy",
        component: () => import("../views/WhatIsGestaltTherapy.vue"),
      },
      {
        path: "/services-offered",
        name: "services offered",
        component: () => import("../views/ServicesOffered.vue"),
      },
      {
        path: "/book-session",
        name: "book session",
        component: () => import("../views/BookSession.vue"),
      },
      {
        path: "/prices",
        name: "prices",
        component: () => import("../views/Prices.vue"),
      },
      {
        path: "/sample-topics",
        name: "sample topics",
        component: () => import("../views/SampleTopics.vue"),
      },
      {
        path: "/workshop",
        name: "workshop",
        component: () => import("../views/Workshop.vue"),
      },
      {
        path: "/about-me",
        name: "about me",
        component: () => import("../views/AboutMe.vue"),
      },
]
//   },
// ];

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
