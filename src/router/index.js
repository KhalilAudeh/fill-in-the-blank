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
    path: "/why-gestalt-therapy",
    name: "why gestalt therapy",
    component: () => import("../views/WhyGestaltTherapy.vue"),
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
    path: "/practical-info",
    name: "practical info",
    component: () => import("../views/PracticalInfo.vue"),
  },
  {
    path: "/sample-topics",
    name: "sample topics",
    component: () => import("../views/SampleTopics.vue"),
  },
  {
    path: "/topic-details",
    name: "topic details",
    component: () => import("../views/TopicDetails.vue"),
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
  {
    path: "/meditation",
    name: "meditation",
    component: () => import("../views/Meditation.vue"),
  },
  {
    path: "/contact-me",
    name: "contact me",
    component: () => import("../views/ContactMe.vue"),
  },
];
//   },
// ];

const router = new VueRouter({
  // mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return desired position
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
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
