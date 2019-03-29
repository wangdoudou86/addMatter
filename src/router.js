import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Add from './views/Add.vue'
import Info from './views/Info.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[{
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
          },
        {
          path: 'admin',
          name: 'admin',
          component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue') //用懒加载
          }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/info/:id',
      name: 'info',
      component: Info
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
