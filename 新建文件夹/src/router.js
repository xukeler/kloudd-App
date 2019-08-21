import Vue from "vue";
import Router from "vue-router";
import Login from '@/views/login'
import musicPlay from '@/views/musicPlay'
import mvPlay from '@/views/mvPlay'
import not from '@/views/404'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Login
    },
    {
      path: "/musicPlay",
      name: 'musicPlay',
      component: musicPlay
    },
    {
      path: "/mvPlay",
      name: 'mvPlay',
      component: mvPlay
    },
    {
      path:'/404',
      component:not
    }
  ]
});
