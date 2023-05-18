
export const routerMAP = [
    {
      alwaysShow:false,
      path: '/',
      name: 'home',
      component: ()=>import('../views/Login.vue')
    },
    {
      alwaysShow:false,
      path: '/Main',
      name: 'Main',
      component: ()=>import('../layout/index.vue')
    },
    {
      alwaysShow:false,
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      alwaysShow:false,
      path:"/text",
      name:'测试',
      component:()=>import('../views/MyText.vue')
    }
  ]