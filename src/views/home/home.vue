<template>
  <div class="home">
    <home-nav/>
    <search-pos/>
    <categories/>
    <hot-list/>
    <button @click="btnClick">下拉一下</button>
    <hr><hr><hr><hr><hr><hr>
  </div>
</template>

<script setup>
import HomeNav from './cpns/home-nav-bar.vue'
import SearchPos from './cpns/home-search-position.vue'
import Categories from './cpns/home-categories.vue'
import HotList from './cpns/home-hotList.vue'
import useHome from '@/stores/modules/home';

//调用store中的homeStore发送请求
  const homeStore = useHome()
  homeStore.fetchHotSuggests()
  homeStore.fetchCategories()
  homeStore.fetchHouseList()



  // 点击按钮刷新数据
  function btnClick() {
    homeStore.fetchHouseList()
  }
</script>

<style scoped>
  
</style>