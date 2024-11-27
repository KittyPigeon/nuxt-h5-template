export const TOKEN_KEY = 'token';
export const USER_INFO_KEY = 'user_info'

// 获取用户信息
export const getUser = () => {
    const _user = localStorage.getItem(USER_INFO_KEY) ? JSON.parse(localStorage.getItem(USER_INFO_KEY) as string) : '';
    return _user
}

// 获取token 
export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}
