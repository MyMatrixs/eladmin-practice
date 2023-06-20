import request from '@/utils/request'
import {encrypt} from '@/utils/rsaEncrypt'

export function editUser(data){
    return request({
        url:'main/center',
        method:'post',
        data
    })
}