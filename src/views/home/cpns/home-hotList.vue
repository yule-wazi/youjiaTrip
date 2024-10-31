<template>
  <div class="hotList">
    <div class="title">热门精选</div>
    <div class="house">
      <template v-for="item in houseList" :key="item.data.cityId">
        <house-type9 
        v-if="item.discoveryContentType === 9" 
        :houseData="item.data"
        @click="checkDetails(item.data)"
        />
        <house-type3 
        v-if="item.discoveryContentType === 3"
        :houseData="item.data"
        @click="checkDetails(item.data)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHome from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import HouseType9 from '@/components/houseType-t9/houseType-t9.vue'
import HouseType3 from '@/components/houseType-t3/houseType-t3.vue'
import router from '@/router';


  const homeStore = useHome()
  const {houseList} = storeToRefs(homeStore)

  // 跳转详情页
  function checkDetails(item) {
    router.push("/details/"+ item.houseId)
  }
</script>

<style scoped>
  .hotList {
    padding: 0 20px;
    margin-top: 25px;
    .title {
      font-size: 18px;
      color:#333;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .house {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>