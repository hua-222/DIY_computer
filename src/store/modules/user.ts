// 创建 用户相关的 store仓库
import { defineStore } from "pinia";

//引入登录接口
import { httpLogin, httpUserInfo } from '@/api/user'
//引入数据类型
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { userState } from './types/type'
//引入本地存储方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
//引入常量路由
import { constantRouter } from '@/router/routes'

let useUserStore = defineStore('User', {
    //存储数据
    state: (): userState => ({
        token: GET_TOKEN(), //用户唯一标识token
        menuRoutes: constantRouter, //仓库存储生成菜单路由（数组）
        userInfo: {},  // 登录成功保存 当前用户信息
    }),
    //异步 逻辑的地方
    actions: {
        //用户登录
        async userLogin(data: loginForm) {
            let result: loginResponseData = await httpLogin(data)
            if (result.code === 200) {
                this.token = result.data.token as string
                //本地存储一份  也可安装 pinia-plugin-persist插件 实现持久化存储
                SET_TOKEN(result.data.token as string)
                return result
            } else {
                return Promise.reject(new Error(result.data.message))
            }
        },
        // 获取用户信息方法
        async getUserInfo() {
            let result = await httpUserInfo()
            if (result.code === 200) {
                this.userInfo = Object.assign(this.userInfo,{...result.data.checkUser})
            }
        }
    },
    getters: {

    }
})
export default useUserStore