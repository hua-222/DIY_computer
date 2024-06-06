<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧路由菜单 -->
      <el-aside class="common-layout-aside">
        <Logo />
        <!-- 展示菜单 -->
        <!-- 滚动组件 -->
        <el-scrollbar class="scrollbar" :native="false">
          <!-- 菜单组件 -->
          <el-menu :default-active="$route.path" background-color="#001529" :router="true" text-color="white">
            <!-- 根据路由展示菜单 -->
            <Menu :menuList="userStore.menuRoutes" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <!-- 右侧路由header导航 -->
        <el-header class="common-layout-header">
          <Tabbar />
        </el-header>
        <!-- 右侧内容区 -->
        <el-main class="common-layout-main">
          <Layout />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// 引入左侧菜单logo子组件
import Logo from "./logo/index.vue";
// 引入菜单组件
import Menu from "./menu/index.vue";
// 右侧内容展示区域
import Layout from "./layout.vue";
// 引入头部tabbar组件
import Tabbar from './tabbar/index.vue'
// 引入路由对象
import { useRoute } from 'vue-router'
const $route = useRoute()

//获取用户相关仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100vh;

  .common-layout-aside {
    width: $layout-aside-width;
    height: 100vh;
    background: $layout-aside-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $layout-menu-logo-height);
      padding-top: 5px;

      .el-menu {
        border-right: none;
      }
    }
  }

  .common-layout-header {
    height: $layout-header-height;
  }
  ::v-deep(.el-header) {
    padding: 0;
  }

  .common-layout-main {
    height: calc(100% - $layout-header-height);
    background: $layout-main-background;
  }
}
</style>
