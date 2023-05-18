import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import menuTrees from '../api/createMenu.js'
//import HomeView from '../views/HomeView.vue'

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
  loadMenus(menuTrees)
  next()
})

export default router


export const loadMenus = (menuTree)=>{

  store.dispatch('SetSiderbarRouter',menuTree)
}
