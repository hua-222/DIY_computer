//对外暴露的路由
export const constantRouter = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login"
  },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout"
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404"
  },
  {
    //重定向  当路径不匹配时重定向到404页面
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any"
  }
];
