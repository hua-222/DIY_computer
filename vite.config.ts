import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        //default
        mockPath: 'mock',
        localEnabled: command === 'serve' //保证开发阶段可以使用mock接口
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src")  //相对路径别名配置  使用@代替 src
      }
    },
    //scss全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        }
      }
    },
    server: {
      open: true,  //自动启动浏览器
      host: '0.0.0.0', // localhost
      port: 8001,  //端口号
      //https: false
    }
  }
})
