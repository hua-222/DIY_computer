<template>
    <!-- 左侧图标 展开/收起 -->
    <el-tooltip class="box-item" effect="dark" :content="layoutSettingStore.fold ? '展开菜单' : '折叠菜单'" placement="right">
        <el-icon class="tabbar-left-icon" @click="changeIcon">
            <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
        </el-icon>
    </el-tooltip>
    <!-- 左侧导航面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
            <template v-if="item.meta.title">
                <el-icon style="margin: 0px 2px;vertical-align: top;">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <!-- 面包屑展示匹配路由标题 -->
                <span>{{ item.meta.title }}</span>
            </template>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Breadcrumb',
})
// 引入路由对象
import { useRoute } from 'vue-router'
const $route = useRoute()
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