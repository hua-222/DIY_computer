<template>
    <!-- 左侧图标 展开/收起 -->
    <el-icon class="tabbar-left-icon">
        <Expand />
    </el-icon>
    <!-- <el-icon><Fold /></el-icon> -->
    <!-- 左侧导航面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.tabbar-left-icon {
    margin-right: 10px;
}
</style>