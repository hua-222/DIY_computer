//用户相关接口
import http from '@/utils/request'
import type { loginForm, loginResponseData, userResponseData } from './type'

// enum枚举  
enum API {
   LOGIN_URL = "/api/user/login",
   USERINFO_URL = "/api/user/info"
}

//暴露请求函数
//登录接口方法
export const httpLogin = (data: loginForm) => http.post<any, loginResponseData>(API.LOGIN_URL,data)

//获取用户信息接口方法
export const httpUserInfo = () => http.get<any, userResponseData>(API.USERINFO_URL)
