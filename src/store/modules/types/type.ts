import type { RouteRecordRaw } from 'vue-router'
// 定义token 类型
export interface userState {
    token: string | null,
    menuRoutes: RouteRecordRaw[],
    userInfo: Object
}