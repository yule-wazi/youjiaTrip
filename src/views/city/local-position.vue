<template>
  <div class="local-position">
    <div class="top">
      <van-search v-model="searchValue" 
      placeholder="城市/区域/位置" 
      show-action
      shape="round"
      @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive" :duration=0.3 color="var(--primary-color)">
        <template v-for="(value, key, index) in citiesAll" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <template v-for="(value, key, index) in citiesAll">
        <grounp-data  v-show="tabActive === key" :groupData="value"/>
      </template>
    </div>
  </div>
</template>

<script setup>
  import useCity from '@/stores/modules/city';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import GrounpData from './cpns/citiesAllContents.vue'

  
  const router = useRouter()
  const searchValue = ref("")
  // 点击取消按钮返回上一页
  function cancelClick() {
    router.back()
  }

  const tabActive = ref()

  // 在pinia中请求数据并拿出数据
  const cityStore = useCity()
  // 发出请求
  cityStore.fetchCityAll()
  const {citiesAll} = storeToRefs(cityStore)
  

</script>

<style lang="less" scoped>
  .local-position {
    --van-tabs-line-height: 30px;
    --van-tab-text-color: var(--subText-color);
    --van-tab-active-text-color:var(--text-color);
    --van-tabs-nav-background:var(--bg-color);
    .top {
      :deep(.van-search) {
        background-color: var(--bg-color);

        .van-search__action {
          color: var(--text-color);
        }
      }
      position: relative;
      z-index: 2;
    }

    .content {
      height: calc(100vh - 84px);
      overflow-y:auto;
      background-color: var(--bg-color);
      color: var(--text-color);
      :deep(.van-index-anchor) {
        background-color: var(--bg-color);
        color: var(--primary-color);
      }
      :deep(.van-index-bar) {
        color:  var(--text-color);
        .hotCity {
          .city {
            background-color: var(--item-color);
          }
        }
        .van-cell {
          background-color: var(--bg-color);
          color: var(--text-color);
        }
      }
    }
  }

  
</style>