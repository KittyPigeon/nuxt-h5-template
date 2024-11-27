import { createWebHashHistory, createRouter } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import("@/layout"),
    redirect: "/home",
    children: [
      { path: 'home', component: () => import("@/views/home") },
      { path: 'about', component: () => import("@/views/about") },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/login"),
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const whiteList = ['/login', '404', 'erorr'];
// router.beforeEach(())
export default router;