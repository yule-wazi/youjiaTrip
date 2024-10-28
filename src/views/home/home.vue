<template>
  <div class="home">
    <home-nav/>
    <search-pos/>
    <categories/>
    <div class="showSearch" v-if="showSearch">我是搜索展示XXXXXXXXXXXx</div>
    <hot-list/>
  </div>
</template>

<script setup>
import {computed, ref, watch} from 'vue'
import HomeNav from './cpns/home-nav-bar.vue'
import SearchPos from './cpns/home-search-position.vue'
import Categories from './cpns/home-categories.vue'
import HotList from './cpns/home-hotList.vue'
import useHome from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll';

//调用store中的homeStore发送请求
  const homeStore = useHome()
  homeStore.fetchHotSuggests()
  homeStore.fetchCategories()
  homeStore.fetchHouseList()


  const {isReachBottom, scrollTop} = useScroll()
  // 监听滚动高度&请求后续数据
  watch(isReachBottom, (newValue) => {
    if(newValue) {
      homeStore.fetchHouseList().then(() => {
        isReachBottom.value = false
      })
    }
  })


  // 展示搜索栏
  // 定义的可响应式数据依赖另一个可响应数据时，用computed计算属性
    const showSearch = computed(() => {
      return scrollTop.value > 100
    })

</script>

<style scoped>
  
</style>