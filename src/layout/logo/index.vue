<template>
    <div class="logo" v-if="setting.logoHidden">
        <img :src="setting.logo" alt="" />
        <el-tooltip :content="setting.title" :show-arrow="false">
            <p>{{ setting.title }}</p>
        </el-tooltip>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Logo'
})

import setting from '@/setting'

</script>

<style scoped lang="scss">
.logo {
    width: 100%;
    height: $layout-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 5px 0 3px;
    padding-top: 5px;
    img {
        width: 50px;
        height: 28px;
    }
    p {
        margin-left: 5px;
        font-size: $layout-menu-title-fontSize;
        /* 当文本内容超过7个字时，省略号... */
        white-space: nowrap; /* 不换行 */
        overflow: hidden;  /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        max-width: 7em; /* 限制最大宽度，相当于7个字的宽度 */
    }
}
</style>