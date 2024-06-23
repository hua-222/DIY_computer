// 路由鉴权: 鉴权 项目当中路由能不能被查看的权限的设置
import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import setting from './setting'
// 获取用户相关的小仓库内部token数据 判断用户是否登录成功
import useUserStore from './store/modules/user'

NProgress.configure({ showSpinner: false });
// 全局守卫: 项目当中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach(async(to, from, next) => {
    let userStore = useUserStore()
    // to: 将要访问哪个路由
    // from: 从哪个路由来
    // next: 路由放行的函数
    NProgress.start()
    // 获取token 判断用户是否已经登录 
    let token = userStore.token
    // 获取用户名字
    let userInfo = userStore.userInfo
    // 用户登录判断
    if (token) {
        // 登录成功 访问login 不能访问 指向首页
        if (to.path === '/login') {
            next({
                path: '/'
            })
        } else {
            // 有用户信息
            if(userInfo) {
                //放行
                next()
            } else {
                // 如果没有用户信息 在守卫这发请求获取到用户信息再放行
                try {
                    // 获取用户信息
                    await userStore.getUserInfo();
                    next()
                } catch (error) {
                    // token过期: 获取不到用户信息
                    // 用户手动修改 本地存储token
                    // 退出登录 用户相关的数据清空
                    userStore.userLogout()
                    next({
                        path: '/login',
                        query: {
                            redirect: to.path
                        }
                    })
                }
            }
        }
    } else {
        // 用户登录判断
        if (to.path === '/login') {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.path
                }
            })
        }
    }
})

// 全局后置守卫
router.afterEach((to) => {
    document.title = `${setting.title} - ${to.meta.title}`
    NProgress.done()
})