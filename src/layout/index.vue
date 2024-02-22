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
          <el-menu background-color="#001529" text-color="white">
            <el-sub-menu index="1">
              <template #title>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <!-- 右侧路由header导航 -->
        <el-header class="common-layout-header">Header</el-header>
        <!-- 右侧内容区 -->
        <el-main class="common-layout-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Logo from "./logo/index.vue";
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
    }
  }
  .common-layout-header {
    height: $layout-header-height;
    background: $layout-header-background;
  }
  .common-layout-main {
    height: calc(100% - $layout-header-height);
    background: $layout-main-background;
  }
}
</style>
