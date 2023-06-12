import { Promise } from 'core-js'
import {login,logout,getCodeImg,getInfo} from '../../api/Login'
import {getToken,setToken,removeToken} from '../../utils/auth'

const user = {
    state:{
        token:getToken(),
        user:{},
        rols:[],
        loadMenus:false
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token = token
        },
        SET_USER:(state,user)=>{
            state.user = user
        },
        SET_ROLES:(state,rols)=>{
            state.rols = rols
        },
        SET_LOAD_MENUS:(state,loadMenus)=>{
            state.loadMenus = loadMenus
        },
    },
    actions:{
        Login(context,userInfo){
            const rememberMe = userInfo.rememberMe
            return new Promise((resolve,reject)=>{
                login(userInfo.username,userInfo.password,userInfo.code,userInfo.uuid).then(res=>{
                    setToken(res.toKen,rememberMe)
                    context.commit('SET_TOKEN',res.toKen)
                    setUserInfo(res,context)
                    context.commit('SET_LOAD_MENUS', true)
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetInfo(context){
            return new Promise((resolve,reject)=>{
                getInfo().then(res=>{
                    setUserInfo(res,context)
                    resolve(res)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        LogOut(context){
            return new Promise((resolve,reject)=>{
                getInfo().then(res=>{
                    logOut(context)
                    resolve()
                }).catch(error=>{
                    logOut(context)
                    reject(error)
                })
            })

        },
        updateLoadMenus(context){}
    }
}

export const logOut = (context)=>{
    context.commit('SET_TOKEN','')
    context.commit('SET_ROLES',[])
    removeToken()
}

export const setUserInfo = (res,context)=>{
    if(res.roles.length ===0){
        context.commit('SET_ROLES',['ROLE_SYSTEM_DEFAULT'])
    }
    else{
        context.commit('SET_ROLES',res.roles)
    }
    context.commit('SET_USER',res.user)
}
export default user