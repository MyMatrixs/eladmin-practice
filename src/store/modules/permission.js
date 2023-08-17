import { routerMAP } from '../../router//routers'


const permission={
    state:{
        routers:routerMAP,
        addRouters:[],
        siderbarRouters:[]
    },
    mutations:{
        SET_SIDEBAR_ROUTERS:(state,routers)=>{
            state.addRouters = routers
            state.siderbarRouters = routerMAP.concat(routers)
            state.routers = routerMAP.concat(routers)
        }
    },
    actions:{
        SetSiderbarRouter(context,routers){
            setTimeout(() => {
                context.commit('SET_SIDEBAR_ROUTERS',filterAsyncRouter(routers,true))
            }, 10);
        }
    },
}

export default permission

export const filterAsyncRouter = (routers,isParent)=>{
    return routers.filter(router =>{
        if(router.component){
            if(typeof(router.component)=="string"){
                router.component = loadView(router.component)
            }
        }
        if(router.path==null){
            return
        }
        if(router.path.startsWith("/")&&(!isParent)){
            router.path = router.path.substring(1)
        }
        if(!(router.children === null)){
            router.children  = filterAsyncRouter(router.children,false)
        }
        return true
    })
}
export const loadView = (path)=>{
    return () => import('../../'+path)
}