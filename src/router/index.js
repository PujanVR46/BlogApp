import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../components/StartPage.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "startpage",
    component: StartPage
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
