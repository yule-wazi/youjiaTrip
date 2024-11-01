<template>
  <div class="priceDesc">
    <h2>{{ priceDesc.title }}</h2>
    <p>{{ priceDesc.introduction }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    priceDesc: {
      type: Object,
      default: {}
    }
  })
</script>

<style lang="less" scoped>
  .priceDesc {
    padding: 12px 16px;
    border-top: 10px solid #F1F3F5;
    h2 {
      font-size: 14px;
      line-height: 17px;
    }
    p {
      font-size: 12px;
      color: #666;
      text-align: justify;
      line-height: 15px;
    }
  }  
</style>