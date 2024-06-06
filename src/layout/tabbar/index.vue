<template>
    <div class="tabbar">
        <div class="tabbar-left">
            <Breadcrumb />
        </div>
        <div class="tabbar-right">
            <Setting />
        </div>
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'

</script>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right, rgb(240, 246, 249), rgb(222, 236, 244), rgb(240, 244, 250));

    .tabbar-left {
        margin-left: 15px;
        display: flex;
        align-items: center;
    }

    .tabbar-right {
        margin-right: 15px;
        display: flex;
        align-items: center;
    }
}
</style>