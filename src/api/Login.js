import requset from '../utils/request'

export function login(username,password,code,uuid){
    return requset({
        url:'auth/login',
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
        url:'auth/info',
        method:'get'
    })
}
export function getCodeImg(){
    return requset({
        url:'auth/code',
        method:'get'
    })
}
export function logout(){
    return requset({
        url:'auth/logout',
        method:'delete'
    })
}
