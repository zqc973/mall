import axios from 'axios'

export function request(config) {
    //创建axios实列
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        //请求前拦截
        return config
    }, err => {
      //请求失败拦截  
    })

    instance.interceptors.response.use(res => {
        //后端数据在res.data中
        return res.data
    }, err => {
        
    })

    return instance(config)
}