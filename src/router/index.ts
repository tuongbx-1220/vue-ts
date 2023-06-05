import { createRouter, createWebHistory } from "vue-router";
import _isEmpty from "lodash/isEmpty";

import { ROUTES } from "@/router/constants";
import LayoutDefault from "@/components/Layout/LayoutDefault.vue";
import { LoginStorage } from "@/utils/localstorage";
import NotFound from "@/pages/NotFound.vue";
import ServerError from "@/pages/ServerError.vue";

const LoginPage = () => import("@/pages/LoginPage/index.vue");

const routes = [
  {
    path: ROUTES.LOGIN.PATH,
    name: ROUTES.LOGIN.NAME,
    component: LoginPage,
  },
  {
    path: ROUTES.SERVER_ERROR.PATH,
    name: ROUTES.SERVER_ERROR.NAME,
    component: ServerError,
  },
  {
    path: ROUTES.NOT_FOUND.PATH,
    name: ROUTES.NOT_FOUND.NAME,
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to) => {
//   const isAuth = !_isEmpty(LoginStorage.getData());
//   if (!isAuth && to.path !== ROUTES.LOGIN.PATH) {
//     return ROUTES.LOGIN.PATH;
//   }
// });

export default router;
