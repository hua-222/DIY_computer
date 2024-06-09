// layout 组件相关配置仓库
import { defineStore } from 'pinia'

let useLayoutSettingStore = defineStore('SettingStore', {
    state: () => {
        return {
            fold: false, //用户控制菜单折叠还是收起
            refresh: false, // 控制刷新效果
        }
    }
})

export default useLayoutSettingStore