<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipe" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{titles[active]}}{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
  const props = defineProps({
    swipe: {
      type: Array,
      default: []
    }
  })
  console.log(props.swipe)
  // 拿取swipe中所有title
  const titles = props.swipe.map((data) => data.title.replace('：',''))

</script>

<style lang="less" scoped>
  .swipe {
    .my-swipe {
      .item {
        img {
          width: 100%;
        }
      }
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color:#fff;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.5);
    }

  }
</style>