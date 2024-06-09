<template>
    <el-button size="small" icon="Refresh" circle />
    <el-button size="small" icon="FullScreen" circle />
    <el-button size="small" icon="Setting" circle />
    <img src="../../../../public/user.png" width="24px" height="24px" style="margin: 0 10px;border-radius: 50%;" />
    <el-dropdown>
        <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Setting'
})
</script>

<style scoped></style>