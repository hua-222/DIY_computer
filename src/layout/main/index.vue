<template>
    <!-- 路由组件出口的位置 -->
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <!-- 渲染layout一级路由组件的子路由 -->
            <component v-if="flag" :is="Component" />
        </transition>
    </router-view>
</template>

<script lang="ts" setup>
import { watch, ref, nextTick } from 'vue';
defineOptions({
    name: 'Main'
})
//控制当前组件是否销毁重建
let flag = ref(true)
import useLayoutSettingStore from '@/store/modules/setting'
// 获取layout配置相关的仓库
let layoutSettingStore = useLayoutSettingStore()
watch(() => layoutSettingStore.refresh, () => {
    flag.value = false
    nextTick(() => {
        flag.value = true
    })
})
</script>
<style scoped>
.fade-enter-from {
    opacity: 0;
    transform: scale(0);
}
.fade-enter-active {
    transition: all .3s;
}
.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>
