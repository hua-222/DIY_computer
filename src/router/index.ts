//通过vue-router插件 实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRouter } from './routes'

const router = createRouter({
    //路由模式 hash模式
    history: createWebHashHistory(),
    routes: constantRouter,
    //滚动行为
    scrollBehavior() {
        return {
            top: 0,
            left: 0
        }
    }
})

export default router