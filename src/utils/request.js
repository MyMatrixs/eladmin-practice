import axios from 'axios'
import {getToken} from '../utils/auth'

const service = axios.create({
    baseURL:"/",
    timeout:5000
})

service.interceptors.request.use(config=>{
    console.log('进入拦截器喽')
    return config
},err=>{
    Promise.reject(err)
})
service.interceptors.response.use(response=>{
    return response.data
},err=>{
    console.log('出错喽')
})
export default service