<template>
  <div class="Details">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content" v-if="mainPart.topModule">
      <swipe :swipe="mainPart.topModule.housePicture.housePics"/>
    </div>
    <div class="infos" v-if="mainPart.topModule">
      <infos :infos="mainPart.topModule"/>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import { useRoute } from 'vue-router';
import useDetails from '@/stores/modules/details';
import { storeToRefs } from 'pinia';
import swipe from './cpns/01_swipe.vue';
import infos from './cpns/02_infos.vue'

  function onClickLeft() {
    // 初始化详情页数据
    const detailsStore = useDetails()
    detailsStore.mainPart = {}

    router.back()
  }
  
  const detailsStore = useDetails()
  const {mainPart, houseId} = storeToRefs(detailsStore)
  
  // 传入详情页id以便向服务器发送请求
  const route = useRoute()
  houseId.value = route.params.id
  
  // 发送请求
  detailsStore.fetchDetailInfos()
</script>

<style scoped>
  
</style>