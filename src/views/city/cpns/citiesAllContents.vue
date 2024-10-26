<template>
  <div class="citiesAllContents">
    <van-index-bar :index-list="citiesList" >
      <van-index-anchor index="#">热门城市</van-index-anchor>
      <div class="hotCity">
        <template v-for="(item, index) in groupData.hotCities">
          <div class="city" @click="cityClick(item)">
            {{ item.cityName }}
          </div>
        </template>
      </div>
      <template v-for="item in groupData.cities">
        <van-index-anchor :index="item.group" />
        <template v-for="(city, inde) in item.cities">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
  import useCity from '@/stores/modules/city';
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const props = defineProps({
    groupData: {
      type: Object,
      default: () => ({})
    }
  })
  
  const citiesList = computed(() => {
    let list = []
    list = props.groupData.cities.map((item) => item.group)
    list.unshift('#')
    return list
  })
  
  
  const router = useRouter()
  const cityStore = useCity()
  // 城市点击
  function cityClick(city) {
    //将城市信息传入store
    cityStore.currentCity = city
    // 回退上一页
    router.back()
  }
</script>

<style scoped lang="less">
  .citiesAllContents {
    --van-index-bar-index-active-color:var(--primary-color);
    --van-index-anchor-text-color:var(--primary-color);
    --van-index-anchor-sticky-text-color:var(--primary-color);

    .hotCity {
    display: flex;
    flex-wrap: wrap;

    .city {
      background-color: #FFF4EC;
      height: 28px;
      width: 70px;
      border-radius: 14px;
      line-height: 28px;
      text-align: center;
      margin: 7px;
      font-size: 12px;
    }
  }
  }

  
</style>