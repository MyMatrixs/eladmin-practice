import request from "@/utils/request"


export function getDepts(params){
    console.log(params)
    return request({
        url:'api/system/dept',
        method:'get',
        params
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

export default { getDepts,add,edit,del}