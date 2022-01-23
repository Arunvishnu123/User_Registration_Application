import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";


const routes = [

  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/User.vue')
  },

  {
    path: '/Userlist',
    name: 'Userlist',
    component: () => import('../views/User_list.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
