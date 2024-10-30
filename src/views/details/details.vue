<template>
  <div class="Details">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    {{ $route.params.id }}
  </div>
</template>

<script setup>
import router from '@/router';
import { useRoute } from 'vue-router';
import useDetails from '@/stores/modules/details';
import { storeToRefs } from 'pinia';

  function onClickLeft() {
    router.back()
  }
  
  const detailsStore = useDetails()
  const {detailInfos, houseId} = storeToRefs(detailsStore)
  
  const route = useRoute()
  houseId.value = route.params.id
  
  // 发送请求
  detailsStore.fetchDetailInfos()
</script>

<style scoped>
  
</style>