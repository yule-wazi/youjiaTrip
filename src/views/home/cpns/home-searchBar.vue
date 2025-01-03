<template>
  <div class="searchBar">
    <div class="left">
      <div class="start">
        <div class="text">住</div>
        <div class="time">{{ startDate }}</div>
      </div>
      <div class="end">
        <div class="text">离</div>
        <div class="time">{{ endDate }}</div>
      </div>
    </div>
    <div class="right">
      <div class="keywords">关键字/位置/民宿名</div>
      <van-icon name="search" size="24"/>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';
import { getMonthDate } from '@/utils/getMonthDate';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

  const mainSotre = useMainStore()
  const {start, end} = storeToRefs(mainSotre)
  const startDate = computed(() => getMonthDate(start.value, "MM.DD"))
  const endDate = computed(() => getMonthDate(end.value, "MM.DD"))
</script>

<style lang="less" scoped>
  .searchBar {
    display: flex;
    .left {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      background-color: var(--item-color);

      font-size: 10px;
      padding-left: 10px;
      color: var(--text-color);
      border-radius: 6px 0px 0px 6px;
      .start, .end {
        display: flex;
        padding-right: 10px;
        font-weight: 500;
        .time {
          margin-left: 2px;
        }
        .text {
          color: #999;
        }
      }
      .start {
        margin-bottom: 3px;
      }
    }
    .right {
      background-color: var(--item-color);
      padding: 0 10px;
      margin-left: 1px;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color:#999;
      border-radius: 0px 6px 6px 0px;
    }


  }
</style>