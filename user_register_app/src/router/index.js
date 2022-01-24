import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login.vue";
import Register from "../views/register.vue";

const routes = [

  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/userData.vue')
  },

  {
    path: '/register_success',
    name: 'register_success',
    component: () => import('../views/registrationConfirm.vue')
  },

  {
    path: '/Userlist',
    name: 'Userlist',
    component: () => import('../views/userList.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
