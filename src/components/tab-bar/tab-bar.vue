<template>
  <div class="tab-bar">
    <!-- 调用vant组件库，底部选项 -->
    <van-tabbar v-model="currentindex" active-color='#FF9F46' route>
      <template v-for="(item, index) in data" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.context }}</span>
          <template #icon="props">
            <van-icon :name="props.active ? item.iconfontActive : item.iconfont" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
  import data from '@/assets/data/tab-bar-data'
  import { ref } from 'vue';
  //引用
  const currentindex = ref(0);
  
</script>

<style lang="less" scoped>
  .tab-bar {
    --van-tabbar-item-icon-size: 23px;
    :deep(.van-tabbar-item) {
      font-size: 14px;
    }
  }

</style>