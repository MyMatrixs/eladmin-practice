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
export function edit(data){
    return request({
        url:'system/menu',
        method:'put',
        data
    })

}
export function del(ids){
    return request({
        url:'system/menu',
        method:'delete',
        data:ids
    })
}

export default { getMenus,add,edit,del}