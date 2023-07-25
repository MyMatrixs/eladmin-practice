import request from '@/utils/request'
import {encrypt} from '@/utils/rsaEncrypt'

export function editUser(data){
    return request({
        url:'api/main/center',
        method:'post',
        data
    })
}