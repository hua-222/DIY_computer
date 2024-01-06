import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//@ts-ignore  忽略当前文件的ts类型的验策 否则有红色提示（打包失败）
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg插件需求配置代码
import "virtual:svg-icons-register";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

//引入自定义插件对象: 注册整个项目全局组件
import globalComponent from '@/components';

//引入模板的全局的样式
import "@/styles/index.scss";

app
.use(globalComponent) //安装自定义组件
.use(ElementPlus, { 
  size: "default", 
  locale: zhCn,  // ElementPlus 国际化配置
})
//将应用挂载到挂载点上
.mount("#app");
