import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import adminpage from "../views/adminPage.vue";
import userdetails from "../views/userDet.vue";

import userlist from "../views/userList.vue";

import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "About",
    component: Register,
  },
  {
    path: "/officerpanel",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/adminpage",
    name: "adminpage",
    component: adminpage,
    meta: {
      authRequired: true,
    },
   
  },
  {
    path: "/userdetail",
    name: "userdetail",
    component: userdetails,
    meta: {
      authRequired: true,
    },
   
  },
  {
    path: "/userlist",
    name: "userlist",
    component: userlist,
   
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next({
        path: "/",
      });
    }
  } else {
    next();
  }
});

export default router;
