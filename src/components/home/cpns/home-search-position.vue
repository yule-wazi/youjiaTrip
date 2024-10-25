<template>
  <div class="search-pos">
    <div class="location">
      <div class="city" @click="localPos">武汉</div>
      <div class="position">
        <span class="myPos" @click="posClick">我的位置</span>
        <van-icon name="aim" color="#FF9F46" size="18"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';


  function posClick() {
    navigator.geolocation.getCurrentPosition(res => {
      console.log("获取位置成功", res)
    },err => {
      console.log("获取位置失败", err)
    })
  }

  // 选择城市
  function localPos() {
    router.push('/localPosition')
  }
</script>

<style scoped>
  .search-pos {
    .location {
      display: flex; 
      height: 40px;
      align-items: center;

      .city {
        flex: 1;
        padding-left: 20px;
      }
      
      .position {
        width: 80px;
        padding: 10px;

        .myPos {
          margin-right: 5px;
          font-size: 12px;
        }
      }
    }
  }
</style>