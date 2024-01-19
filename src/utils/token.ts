//封装本地存储、读取数据方法

//存储token
export const SET_TOKEN = (token: string) => {
    localStorage.setItem('TOKEN', token)
}

//读取token
export const GET_TOKEN = () => {
    return localStorage.getItem('TOKEN')
}