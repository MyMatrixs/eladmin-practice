import request from "@/utils/request"

export function getMenus(params){
    console.log(params)
    return request({
        url:'system/menu',
        method:'get',
        params
    })
}

export default { getMenus}