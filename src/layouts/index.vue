<template>
  <el-container>
    <Aside></Aside>
    <el-container class="layout-dd">
      <Header> </Header>
      <Main style="padding: 20px;"></Main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>

const Header = defineAsyncComponent(() => import("@/layouts/Elheader/index.vue"))
const Aside = defineAsyncComponent(() => import("@/layouts/Elaside/index.vue"))
const Main = defineAsyncComponent(() => import("@/layouts/Elmain/index.vue"))

</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  width: 100%;
}

.layout-dd {
  display: block !important;
  background-color: #f4f6f8;

}
</style>