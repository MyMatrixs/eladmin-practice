import request from "@/utils/request"

export function buildMenus(){
    return request({
        url:'api/system/menu/build',
        method:'get',
    })
}   

export function getMenus(params){
    console.log(params)
    return request({
        url:'api/system/menu',
        method:'get',
        params
    })
}

export function getMenusTree(pid){
    return request({
        url:'api/system/menu/lazy?'+(pid=='null'?'':'pid='+pid),
        method:'get'
    })
}

export function add(data){
    return request({
        url:'api/system/menu',
        method:'post',
        data
    })
}
export function edit(data){
    return request({
        url:'api/system/menu',
        method:'put',
        data
    })

}
export function del(ids){
    return request({
        url:'api/system/menu',
        method:'delete',
        data:ids
    })
}

export default { getMenus,getMenusTree,add,edit,del}