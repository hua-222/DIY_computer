import { createPinia } from 'pinia'; //引入pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 引入持久化插件

let pinia = createPinia(); //创建pinia实例
pinia.use(piniaPluginPersistedstate) // 将插件添加到pinia实例中

export default pinia;