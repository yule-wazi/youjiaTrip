<template>
  <div class="favor">
    <div class="nav-bar">
      <nav-bar>
        <template #left>
        </template>
        <template #center>
          <div class="tab">
            <template v-for="(item, index) in ['我的收藏','我的历史']">
              <div class="item" 
              @click="clkActive(index)"
              :class="{active:index === currentIndex}"
              >{{ item }}</div>
            </template>
          </div>
        </template>
        <template #right>
        </template>
      </nav-bar>
    </div>
    <collection-item/>
    <footer-text/>

  </div>
</template>

<script setup>
import navBar from '@/components/nav-bar/nav-bar.vue';
import footerText from '@/components/footer-text/footer-text.vue';
import collectionItem from './cpns/collection-item.vue';
import useCollection from '@/stores/modules/collection';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
// 切换内容
const currentIndex = ref(0);
const clkActive = (index) => {
  currentIndex.value = index
  
}

// 接收接口数据
const collectionStore = useCollection()
// 发送网络请求
collectionStore.fetchCollectionAll()
const { collectionList } = storeToRefs(collectionStore)
// 监听currentIndex变化
watch(currentIndex, () => {
  collectionStore.fetchCollectionAll(currentIndex.value)
})

</script>

<style lang="less" scoped>
  .favor {
    .nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
      background-color: var(--bg-color);
      border-bottom: 2px var(--border-color) solid;
      box-shadow: 0 1px 10px#99999991 ;
      .center {
        .tab {
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          font-weight: 400;
          .item {
            border: 1px var(--border-color) solid;
            text-align: center;
            line-height: 30px;
            padding: 0px 10px;
            border-radius: 5px;
          }
          .active {
            transition: background-color .5s ease;
            background-color: var(--primary-color);
            color: #fff;
          }
        }
      }
      .right {
        font-size: 25px;
        color: var(--text-color);
      }
    }
  }
</style>