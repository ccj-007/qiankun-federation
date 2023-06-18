import App from "../App.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: App,
  },
];
const router = new VueRouter({
  routes,
});
export default router;
