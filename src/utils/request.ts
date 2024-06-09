// 封装axios 使用请求与响应拦截器
import axios from "axios";

import { IObject } from "@/types/interface";
//引入用户相关仓库
import useUserStore from '@/store/modules/user'
//引入 element-plus
import { ElMessage } from "element-plus";
// 创建axios实例
let http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径
  timeout: 5000 // 超时时间
});

//http实例添加请求
http.interceptors.request.use(
  (config: any) => {
    let userStore = useUserStore()
    if(userStore.token) {
      config.headers.token = userStore.token
    }
    //添加请求头信息 headers
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//http实例添加响应拦截器
http.interceptors.response.use(
  (response: any) => {
    //响应成功
    if (response.data.code === 200) {
      return response.data;
    }

    //错位提示
    ElMessage.error(response.data.data.message);

    return response.data
    //return Promise.reject(new Error(response.data.data.message || "Error"));
  },
  (error) => {
    //http状态码
    let status = error.response.status;
    const httpCodeLabel: IObject<string> = {
      400: "请求参数错误",
      401: "未授权，请登录",
      403: "拒绝访问",
      404: "请求地址出错",
      408: "请求超时",
      500: "API接口报500错误",
      501: "服务未实现",
      502: "网关错误",
      503: "服务不可用",
      504: "网关超时",
      505: "HTTP版本不受支持"
    };
    return Promise.reject(new Error(httpCodeLabel[status] || "接口错位"));
  }
);

export default http
