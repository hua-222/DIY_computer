<template>
    <template v-for="(item, index) in props.menuList" :key="item.path">
        <!-- 没有子路由 -->
        <template v-if="!item.children">
            <el-menu-item v-if="!item.meta?.hidden" :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta?.icon"></component>
                    </el-icon>
                    <span>{{ item.meta?.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 有子路由且只有一个 -->
        <template v-if="item.children && item.children.length === 1">
            <el-menu-item :index="item.children[0].path">
                <template #title>
                    <el-icon>
                        <component :is="item.children[0].meta?.icon"></component>
                    </el-icon>
                    <span>{{ item.children[0].meta?.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 折叠菜单 有子路由 -->
        <template v-if="item.children && item.children.length > 1">
            <el-sub-menu v-if="!item.meta?.hidden" :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta?.icon"></component>
                    </el-icon>
                    <span>{{ item.meta?.title }}</span>
                </template>
                <!-- 递归路由菜单组件 -->
                <Menu :menuList="item.children" />
            </el-sub-menu>
        </template>
    </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouteRecordRaw } from "vue-router";
//获取父组件传过来的路由数组
export default defineComponent({
    name: 'Menu',
    props: {
        menuList: Array as PropType<RouteRecordRaw[]>
    },
    setup(props) {
        return { props }
    }
})
</script>

<style scoped></style>