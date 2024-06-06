//对外暴露的路由
import Layout from "@/layout/index.vue";
export const constantRouter = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: '登录', //菜单标题
      hidden: true, // 是否该路由标题在菜单里隐藏 true=隐藏 false=不隐藏
      isNavigationMenu: false
    }
  },
  {
    path: "/",
    component: Layout,
    name: 'Layout',
    redirect: "/home",
    meta: {
      title: 'Layout',
      icon: "icon-desktop",
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import("@/views/home/index.vue"),
        name: 'Home',
        meta: {
          title: '首页',
          icon: "HomeFilled",
          hidden: false,
        }
      }
    ]
  },
  {
    path: '/screen',
    component: () => import("@/views/screen/index.vue"),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      icon: 'DataLine',
      hidden: false
    }
  },
  {
    path: '/acl',
    component: () => import("@/layout/index.vue"),
    name: 'Acl',
    meta: {
      title: '权限管理',
      icon: 'Lock',
      hidden: false
    },
    children: [
      {
        path: '/acl/user',
        component: () => import("@/views/acl/user/index.vue"),
        name: 'User',
        meta: {
          title: '用户管理',
          icon: 'User',
          hidden: false
        },
      },
      {
        path: '/acl/role',
        component: () => import("@/views/acl/role/index.vue"),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'UserFilled',
          hidden: false
        },
      },
      {
        path: '/acl/permission',
        component: () => import("@/views/acl/permission/index.vue"),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          icon: 'Grid',
          hidden: false
        },
      }
    ]
  },
  {
    path: '/test',
    component: () => import("@/layout/index.vue"),
    name: 'Test',
    meta: {
      title: '测试',
      icon: 'Refresh',
      hidden: false,
    },
    children: [
      {
        path: '/test',
        component: () => import("@/views/test/index.vue"),
        name: 'Test',
        meta: {
          title: '测试',
          icon: 'Refresh',
          hidden: false,
        },
      }
    ]
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: '404',
      hidden: true,
    }
  },
  {
    //重定向  当路径不匹配时重定向到404页面
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: '任意路由',
      hidden: true,
    },
  }
];
