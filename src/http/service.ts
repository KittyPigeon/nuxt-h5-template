import request from './request'
export const post = (url, data = {}, config = {}) => {
    return request({
        url,
        method: 'post',
        data,
        ...config
    })
}
export const get = (url, data, config = {}) => {
    return request({
        url,
        method: 'get',
        params: data,
        ...config
    })
}
export const put = (url, data, config = {}) => {
    return request({
        url,
        method: 'put',
        data,
        ...config
    })
}
export const del = (url, data) => {
    return request({
        url,
        method: 'delete',
        data,
    })
}