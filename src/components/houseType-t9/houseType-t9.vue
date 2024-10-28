<template>
  <div class="houseType9">
    <div class="bg">
      <img :src="houseData.image.url" alt="">
    </div>
    <div class="content">
      <div class="summaryText">{{ houseData.summaryText }}</div>
      <div class="descr">{{ houseData.houseName }}</div>
      <div class="starAndPrice">
        <van-rate :model-value="getStartNumber"  size="12" color="#fff" allow-half/>
        <div class="price">￥{{ houseData.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

  const props = defineProps({
    houseData: {
      type: Object,
      default: () =>({})
    }
  })

  const getStartNumber = computed(() => {
    return Number(props.houseData.commentScore)
  })
</script>

<style scoped>
  .houseType9 {
    position: relative;
    height: 223px;
    border-radius: 6px;
    overflow: hidden;
    width: calc(50% - 8px);
    margin: 0 8px 8px 0;
    color: #fff;
    .bg {
      img {
        height: 223px;

      }
    }

    .content {
      position: absolute;
      padding: 0 10px;
      bottom: 0;
      background-image: linear-gradient(179deg, rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, .64));;

      .summaryText {
        font-size: 10px;
        line-height: 12px;
        margin-bottom: 4px;
      }

      .descr {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 6px;
        display: -webkit-box;
        margin-bottom: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .starAndPrice {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        margin-bottom: 15px;
      }
    }
  }
</style>