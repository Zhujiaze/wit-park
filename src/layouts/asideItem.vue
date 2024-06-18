<template>
    <template v-if="item.children && item.children.length > 0">
        <el-sub-menu :index="item.component">
            <template #title>
                <span>{{ item.title }}</span>
            </template>
            <asideItem v-for="(child, childIndex) in item.children" :key="childIndex" :item="child"></asideItem>
        </el-sub-menu>
    </template>
    <template v-else>
        <el-menu-item :index="item.component">
            <span>{{ item.title }}</span>
        </el-menu-item>
    </template>
</template>

<script lang="ts" setup>
import type { Datum } from '@/api/types/CommonType'

defineProps<{ item: Datum }>()
</script>

<style lang="scss" scoped></style>
