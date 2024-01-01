import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//@ts-ignore  忽略当前文件的ts类型的验策 否则有红色提示（打包失败）
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app
.use(ElementPlus, { size: "default", locale: zhCn, })
.mount("#app");
