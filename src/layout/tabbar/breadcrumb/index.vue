<template>
    <!-- 左侧图标 展开/收起 -->
    <el-tooltip class="box-item" effect="dark" :content="layoutSettingStore.fold ? '展开菜单' : '折叠菜单'" placement="right">
        <el-icon class="tabbar-left-icon" @click="changeIcon">
            <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
        </el-icon>
    </el-tooltip>
    <!-- 左侧导航面包屑 -->
    <el-breadcrumb separator-icon="ArrowRigh">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Breadcrumb',
})
import useLayoutSettingStore from '@/store/modules/setting'
// 获取layout配置相关的仓库
let layoutSettingStore = useLayoutSettingStore()
// 切换图标
const changeIcon = () => {
    layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>

<style scoped lang="scss">
.tabbar-left-icon {
    margin-right: 10px;
    cursor: pointer;
}
</style>