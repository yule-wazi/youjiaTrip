<template>
  <div class="nav-bar">
    <div class="left" @click="onClickLeft">
      <slot name="left"><van-icon name="arrow-left" /> 旅途</slot>
    </div>
    <div class="center">
      <slot name="center">有家旅途</slot>
    </div>
    <div class="right">
      <slot name="right">
        <nav-menu :show="isShow"/>
      </slot>
    </div>
  </div>
</template>

<script setup>
import navMenu from '../nav-menu/nav-menu.vue';
import useDetails from '@/stores/modules/details';
import router from '@/router';
import { ref } from 'vue';

const isShow = ref(false)

function onClickLeft() {
  // 初始化详情页数据
  const detailsStore = useDetails()
  detailsStore.mainPart = {}

  router.back()
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 46px;
    width: 100%;
    text-align: center;
    line-height: 46px;

    .left {
      width: 75px;
      font-size: 14px;
      color: var(--primary-color);
    }
    .center {
      flex: 1;
      font-size: 15px;
      font-weight: 700;
    }
    .right {
      width: 75px;
      font-size: 25px;
      color: var(--primary-color);
    }
  }
</style>