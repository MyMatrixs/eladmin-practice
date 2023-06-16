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
                context.commit('SET_SIDEBAR_ROUTERS',filterAsyncRouter(routers))
            }, 10);
        }
    },
}

export default permission

export const filterAsyncRouter = (routers)=>{
    return routers.filter(router =>{
        if(router.component){
            if(typeof(router.component)=="string"){
                router.component = loadView(router.component)
            }
        }
        if(!(typeof router.children === 'undefined')){
            router.children  = filterAsyncRouter(router.children)
        }
        return true
    })
}
export const loadView = (path)=>{
    return () => import('../../'+path)
}