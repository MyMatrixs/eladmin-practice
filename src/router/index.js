import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import menuTrees from '../api/createMenu.js'
//import HomeView from '../views/HomeView.vue'
import {filterAsyncRouter} from '../store/modules/permission.js'
import {routerMAP} from './routers.js'

Vue.use(VueRouter)


console.log(routerMAP)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routerMAP
})

console.log(router)


router.beforeEach((to,from,next)=>{
  console.log(11111111111111)
  console.log(to)
  if(to.name==='home'){
    loadMenus(menuTrees)
  }
  next()
})

export default router


export const loadMenus = (menuTree)=>{
  const newRouter = filterAsyncRouter(menuTree)
  console.log(newRouter)
  for(let i=0;i<newRouter.length;i++){
    console.log(i)
    console.log(newRouter[i])
    router.addRoute(newRouter[i])
  }
  console.log(router)
  store.dispatch('SetSiderbarRouter',menuTree)

}
