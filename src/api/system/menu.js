import request from "@/utils/request"

export function buildMenus(){
    return request({
        url:'system/menu/build',
        method:'get',
    })
}   

export function getMenus(params){
    console.log(params)
    return request({
        url:'system/menu',
        method:'get',
        params
    })
}

export function add(data){
    return request({
        url:'system/menu',
        method:'post',
        data
    })
}


export default { getMenus,add}