<template>
        <el-header>
                <div class="header-right">
                        <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                        {{ store.info?.name }}
                                </span>
                                <template #dropdown>
                                        <el-dropdown-menu>
                                                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                                        </el-dropdown-menu>
                                </template>
                        </el-dropdown>
                </div>
        </el-header>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()
</script>

<style lang="scss" scoped>
.el-header {
        display: flex;
        justify-content: right;
        align-items: center
}
</style>