import request from '@/utils/request'
import qs from 'qs'

export function initData(url,parse){
    return request({
        url:url+'?'+qs.stringify(parse,{indices:false}),
        method:'get'
    })
}
export function download(url,parse){
    return request({
        url:url+qs.stringify(parse,{indices:false}),
        method:'get',
        responseType:'blob'
    })
}