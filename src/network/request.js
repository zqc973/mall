import axios from 'axios'

export function request(config) {
    //创建axios实列
    const instance = axios.create({
        baseURL: '',
        timeout: 5000
    })

    return instance(config)
}