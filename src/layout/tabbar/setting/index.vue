<template>
    <el-button size="small" icon="Refresh" circle @click="updateRefresh" />
    <el-button size="small" icon="FullScreen" circle @click="fullScreen" />
    <!-- <el-button size="small" icon="Setting" circle @click="drawer = true" /> -->
    <el-switch v-model="form.isDark" style="margin-left: 10px" inline-prompt active-icon="Moon" inactive-icon="Sunny" @change="changeDark" />
    <img :src="userInfo.headerImgUrl" width="24px" height="24px" style="margin: 0 10px;border-radius: 50%;" />
    <el-dropdown style="cursor: pointer">
        <span class="el-dropdown-link">
            {{ userInfo.name }}
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <!-- <el-drawer v-model="drawer" title="主题设置" direction="rtl" :before-close="handleClose">
        <el-form :model="form">
            <el-form-item label="主题颜色：">
                <el-color-picker v-model="form.subjectColor" show-alpha :predefine="predefineColors" />
            </el-form-item>
            <el-form-item label="暗黑模式：">
                <el-switch v-model="form.isDark" inline-prompt active-icon="Moon" inactive-icon="Sunny"
                    @change="changeDark" />
            </el-form-item>
        </el-form>
    </el-drawer> -->
</template>

<script setup lang="ts">
defineOptions({
    name: 'Setting'
})
import { ref } from 'vue'
const drawer = ref(false)
let form = ref({
    subjectColor: '#409EFF',
    isDark: false
})
const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577',
])
import { useRouter, useRoute } from 'vue-router'
// 获取路由器对象
let $router = useRouter()
// 获取路由对象
let $route = useRoute()
import useLayoutSettingStore from '@/store/modules/setting'
// 获取layout配置相关的仓库
let layoutSettingStore = useLayoutSettingStore()
//引入用户相关仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
let userInfo: any = userStore.userInfo
//刷新按钮点击回调
const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh
}
//全屏按钮点击回调
const fullScreen = () => {
    // DOM对象属性: 可以用来判断当前是不是全屏模式[全屏: true, 不是全屏: false]
    let full = document.fullscreenElement
    // 切换全屏模式
    if (!full) {
        // 文档根节点的方法requestFullscreen 实现全屏模式
        document.documentElement.requestFullscreen()
    } else {
        // 退出全屏模式
        document.exitFullscreen()
    }
}
// 退出登录
const logout = () => {
    // 1.清除token和用户信息
    // 2.跳转到 /login登录页面
    userStore.userLogout()
    $router.push({
        path: '/login',
        query: {
            redirect: $route.path
        }
    })
}

// 关闭抽屉
const handleClose = (done: () => void) => {
    done()
}
// 切换暗黑模式
const changeDark = (val: boolean | string | number) => {
    // 获取HTML根节点
    let html = document.documentElement
    val ? html.className = 'dark' : html.className = ''
}
</script>

<style scoped lang="scss"></style>