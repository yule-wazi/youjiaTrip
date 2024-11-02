<template>
  <div class="houseType3">
    <div class="bg">
      <img :src="houseData.image.url" alt="">
    </div>
    <div class="content">
      <div class="location">
        <img src="@/assets/img/localPos.png" alt="">
        <div class="text">{{ houseData.location }}</div>
      </div>
      <div class="descr">{{ houseData.houseName }}</div>
      <div class="summaryText">{{ houseData.summaryText }}</div>
      <div class="starAndPrice">
        <div class="price">￥{{ houseData.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  houseData: {
    type: Object,
    default: () =>({})
  }
})

</script>

<style scoped>
  .houseType3 {
    position: relative;
    height: 223px;
    width: calc(50% - 8px);
    margin-bottom: 10px;

    color: #333333;
    .bg {
      height: 112px;
      img {
        height: 112px;
        width: 100%;
        border-radius: 6px;

      }
    }

    .content {
      position: absolute;
      padding: 0 10px;
      bottom: 0;
      .location {
        display: flex;
        img {
          width: 12px;
          height: 12px;
        }
        .text {
          font-size: 11px;
          margin-left: 2px;
          
        }
      }

      .summaryText {
        font-size: 10px;
        line-height: 10px;
        margin-bottom: 8px;
        color:#666;
      }

      .descr {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 6px;
        text-align: justify;
        display: -webkit-box;
        margin-bottom: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .starAndPrice {
        font-size: 14px;
        margin-bottom: 10px;
        color: var(--primary-color);
      }
    }
  }
</style>