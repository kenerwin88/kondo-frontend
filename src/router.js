import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Ping from './views/Ping.vue';
import Callback from './views/Callback.vue';
import About from "./views/About.vue"

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/callback/github',
      name: 'Callback',
      component: Callback,
    },
  ],
});
