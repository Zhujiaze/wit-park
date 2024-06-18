<template>
    <el-aside width="260px">
        <img style="width: 100%; height: 60px;" src="@/assets/imgs/logo.png" alt="">
        <el-menu active-text-color="#3656ff" background-color="#fff" class="el-menu-vertical-demo"
            :default-active="$route.path" text-color="#000" router>
            <template v-for="(item, index) in menulist" :key="index">
                <asideItem :item="item"></asideItem>
            </template>
        </el-menu>
    </el-aside>
</template>

<script lang="ts" setup>
const asideItem = defineAsyncComponent(() => import('../asideItem.vue'))
import type { MenuDataType } from '@/api/types/CommonType';
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()
const menulist: MenuDataType | null = store.MenuList


</script>

<style lang="scss" scoped>
.el-menu {
    border: none;
    list-style: none;
    padding-top: 20px;
}
</style>