import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Demo from '../quasar/src/demo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
