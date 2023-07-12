import request from "@/utils/request"

export function getMenus(params){
    return request({
        url:'api/menu/',
        method:'get',
        params
    })
}

export default { getMenus}