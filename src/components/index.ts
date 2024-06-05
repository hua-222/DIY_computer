//引入项目中全部的全局组件
import { App } from 'vue';
import SvgIcon from './svgIcon/index.vue';
//引入element-plus 提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//全局对象
const allGlobalComponent: any = { SvgIcon }
//对外暴露插件对象
export default {
    //务必叫 install方法
    install(app: App) {
        Object.keys(allGlobalComponent).forEach((key) => {
            app.component(key, allGlobalComponent[key])
        })
        // 将element-plus提供图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}