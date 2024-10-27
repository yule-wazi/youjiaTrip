<template>
  <div class="categories">
    <template v-for="(item, index) in categories">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="content">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHome from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
  const homeStore = useHome()
  const {categories} = storeToRefs(homeStore)
</script>

<style scoped>
  .categories {
    display: flex;
    padding: 0 20px;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      width: 60px;
      flex-shrink: 0;
      display: flex;
      margin-top: 20px;
      flex-direction: column;
      align-items: center;
      padding: 0 4px;
      img {
        width: 35px;
      }
      .content {
        font-size: 12px;
        margin-top: 3px;
      }
    }    
  }
</style>