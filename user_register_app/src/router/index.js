import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";


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
