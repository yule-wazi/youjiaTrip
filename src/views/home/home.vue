<template>
  <div class="home">
    <home-nav/>
    <search-pos :suggestList="suggestData"/>
  </div>
</template>

<script setup>
import MyRequest from '@/services/request'
import HomeNav from './cpns/home-nav-bar.vue'
import SearchPos from './cpns/home-search-position.vue'
import { ref } from 'vue';


  // 请求热门建议
  const suggestData = ref([])
  MyRequest.get({
    url: "/home/hotSuggests"
  }).then(res => {
    console.log(res.data)
    suggestData.value = res.data
  })
</script>

<style scoped>
  
</style>