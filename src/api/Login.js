import requset from '../utils/request'
import axios from 'axios'

const service = axios.create({
    baseURL:"/",
    timeout:5000
})

export function login(username,password,code,uuid){
    return requset({
        url:'api/auth/login',
        method:'post',
        data:{
            username,
            password,
            code,
            uuid
        }
    })
}
export function getInfo(){
    return requset({
        url:'api/auth/info',
        method:'get'
    })
}
export function getCodeImg(){
    return service({
        url:'api/auth/code',
        method:'get'
    })
}
export function logout(){
    return requset({
        url:'api/auth/logout',
        method:'delete'
    })
}
