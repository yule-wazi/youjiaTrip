import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/favor.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/order/order.vue')
    },
    {
      path: '/message',
      component: () => import('@/views/message/message.vue')
    },
    {
      path: '/localPosition',
      component: () => import('@/views/city/local-position.vue'),
      meta: {
        hideTabBar: true
      }
    },
    {
      path: '/search',
      component: () => import('@/views/search/search.vue'),
      meta: {
        hideTabBar: true
      }
    },
    {
      path: '/details/:id',
      component: () => import('@/views/details/details.vue'),
      meta: {
        hideTabBar: true
      }
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        hideTabBar: true
      }
    }
  ]
})
 router.beforeEach((to,from) => {
    if((to.path == '/favor' || to.path == '/order' || to.path == '/message')&& to.path !== '/login' && !localStorage.getItem("token")) {
      return '/login'
    } 
 })
export default router