<template>
    <div>
        <svg :style="{width, height}" aria-hidden="true">
            <use :xlink:href="prefix + name" :fill="color"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">
defineProps({
    //xlink:href属性值前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    //提供使用的图标名字
    name: String,
    //接受父组件传过来的color颜色
    color: {
        type: String,
        default: ''
    },
    //接受父组件传过来的width宽
    width: {
        type: String,
        default: '16px'
    },
    //接受父组件传过来的height高
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<style scoped>

</style>