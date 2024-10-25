<template>
  <div class="local-position">
    <van-search v-model="searchValue" 
    placeholder="城市/区域/位置" 
    show-action
    shape="round"
    @cancel="cancelClick"
    />
    <van-tabs v-model:active="tabActive" color="#FF9F46">
      <van-tab title="国内(含港澳台)"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
  import { getCityAll } from '@/services';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const searchValue = ref("")
  // 点击取消按钮返回上一页
  function cancelClick() {
    router.back()
  }

  const tabActive = ref(0)

  // 请求数据
  getCityAll().then(res => {
    console.log(res)
  })
</script>

<style scoped>
  .local-position {
    --van-tabs-line-height: 30px
  }
</style>