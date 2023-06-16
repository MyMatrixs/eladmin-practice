
export const routerMAP = [
    {
      alwaysShow:false,
      path: '/',
      name: 'login',
      component: ()=>import('../views/Login.vue')
    },
    {
      alwaysShow:false,
      path: '/Main',
      name: 'Main',
      redirect: '/dashboard',
      component: ()=>import('../layout/index.vue'),
      children:[
        {
          component: () =>  import('../views/Main.vue'),
          title:'dashboard',
          path:'/dashboard',
        }
      ]
    },

    {
      alwaysShow:false,
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      children:[
        {
          component: () =>  import('../views/MyText.vue'),
          title:'dashboard',
          path:'children',
        }
      ]

    },

  ]