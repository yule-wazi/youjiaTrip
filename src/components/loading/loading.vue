<template>
  <div class="loading" v-if="mainStore.isLoading">
    <div class="content">
      <img src="../../assets/img/loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';


  const mainStore = useMainStore()
</script>

<style lang='less' scoped>
  .loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
    .content {
      height: 150px;
      width: 150px;
      background-color: var(--bg-color);
      border-radius: 40px;
      img {
        width: 150px;
      }
    }
  }
</style>