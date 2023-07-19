import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import menuTrees from '../api/createMenu.js'
//import HomeView from '../views/HomeView.vue'
import {filterAsyncRouter} from '../store/modules/permission.js'
import {routerMAP} from './routers.js'
import { getToken } from '@/utils/auth.js'
import {buildMenus} from '../api/system/menu.js'
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
  console.log('当前路由路径：',to,from)
  if(getToken()){
    console.log('获取到了token')
    console.log('loadMenus',store.getters.loadMenus)
    console.log('user.username',!store.getters.user.username)
    if(to.name==='login'){
      next({path:'/Main'})
    }else{
      if(!store.getters.user.username){
        store.dispatch('GetInfo').then(()=>{
          store.dispatch('updateLoadMenus')
          loadMenus(menuTrees,next,to)
        }).catch(
          err=>{
            store.dispatch('LogOut').then(()=>{
              location.reload()
            })
          }
        )
      }else if(store.getters.loadMenus){
        console.log('已经获取信息，还没加载菜单')
        store.dispatch('updateLoadMenus')
        loadMenus(menuTrees,next,to)
      }else{
        console.log('已经获取信息，加载了菜单')
        next()
      }
    }
  }else{
    console.log('没获取到了token')
    if(writelist.indexOf(to.path)!==-1){
      next()
    }else{
      console.log(`/?redirect=${to.fullPath}`)
      next(`/?redirect=${to.fullPath}`)
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

export const loadMenus2 = (next,to)=>{
  buildMenus().then(res=>{
    const newRouter = filterAsyncRouter(res)
    console.log(newRouter)
    for(let i=0;i<newRouter.length;i++){
      router.addRoute(newRouter[i])
    }
    console.log(router)
    store.dispatch('SetSiderbarRouter',res)
    next({ ...to, replace: true })
  })
}

export const loadMenus = (menuTree,next,to)=>{
  const newRouter = filterAsyncRouter(menuTree)
  console.log(newRouter)
  for(let i=0;i<newRouter.length;i++){
    router.addRoute(newRouter[i])
  }
  console.log(router)
  store.dispatch('SetSiderbarRouter',menuTree)
  next({ ...to, replace: true })

}
