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
          <el-menu background-color="#001529" :router="true" text-color="white">
            <!-- 根据路由展示菜单 -->
            <Menu :menuList="userStore.menuRoutes" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <!-- 右侧路由header导航 -->
        <el-header class="common-layout-header">Header</el-header>
        <!-- 右侧内容区 -->
        <el-main class="common-layout-main">
          <Layout />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Logo from "./logo/index.vue";
import Menu from "./menu/index.vue";
import Layout from "./layout.vue";


//获取用户相关仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100vh;
  background: red;

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
    background: $layout-header-background;
  }

  .common-layout-main {
    height: calc(100% - $layout-header-height);
    background: $layout-main-background;
    .text-box {
      width: 600px;
      height: 300px;
      border: 1px solid red;
      padding: 15px;
    }
  }
}
</style>
