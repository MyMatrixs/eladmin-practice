import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import menuTrees from '../api/createMenu.js'
//import HomeView from '../views/HomeView.vue'
import {filterAsyncRouter} from '../store/modules/permission.js'
import {routerMAP} from './routers.js'
import { getToken } from '@/utils/auth.js'

Vue.use(VueRouter)


console.log(routerMAP)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routerMAP
})

console.log(router)

const writelist =['/']
router.beforeEach((to,from,next)=>{
  console.log(to,from,getToken())
  if(getToken()){
    if(to.name==='login'){
      next({path:'/Main'})
    }else{
      if(store.getters.rols.length===0){
        store.dispatch('GetInfo').then(()=>{
          loadMenus(menuTrees)
        }).catch(
          err=>{
            store.dispatch('LogOut').then(()=>{
              location.reload()
            })
          }
        )
      }
    }
  }else{
    if(writelist.indexOf(to.path)!==-1){
      next()
    }else{
      console.log(`/?redirect=${to.fullPath}`)
    }
  }


  /*
  if(getToken()){
    if(to.path==='/'){
      next('/')
    }
    else{
      const a=1
      if(a===2){
        const b=1
      }
      else{
        //loadMenus(menuTrees)
      }
    }
    next()
  }else{
    next(`/`)
  }


  if(to.name==='home'){
    loadMenus(menuTrees)
  }
  next()
  */
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
