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
      component: () => import('@/components/home/home.vue')
    },
    {
      path: '/favor',
      component: () => import('@/components/favor/favor.vue')
    },
    {
      path: '/order',
      component: () => import('@/components/order/order.vue')
    },
    {
      path: '/message',
      component: () => import('@/components/message/message.vue')
    },
    {
      path: '/localPosition',
      component: () => import('@/views/city/local-position.vue'),
      meta: {
        hideTabBar: true
      }
    },
  ]
})

export default router