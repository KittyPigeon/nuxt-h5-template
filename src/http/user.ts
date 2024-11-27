import { post, get, put, del } from './service'

export default {
    getUserInfo(data) {
        return post('/api/getUser', data)
    },
    
}