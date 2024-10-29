<template>
  <div class="search-pos">
    <!-- 选择城市 -->
    <div class="location">
      <div class="city" @click="localPos">
        {{ currentCity.cityName }}
      </div>
      <div class="position">
        <span class="myPos" @click="posClick">我的位置</span>
        <van-icon name="aim" color="#FF9F46" size="18"/>
      </div>
    </div>
    <!-- 日期显示 -->
    <div class="data bottom-gray-line" @click="showDate = true">
      <div class="start">
        <span>入住</span>
        <div class="time">{{ startDate }}</div>
      </div>
      <div class="keep">共{{ DiffDays }}晚</div>
      <div class="end">
        <span>离店</span>
        <div class="time">{{ endDate }}</div>
      </div>
    </div>
    <!-- 日期选择 -->
    <van-calendar v-model:show="showDate" 
      type="range"
      color="#FF9F46"
      :formatter="formatter"
      @confirm="onConfirm" 
    />
    <!-- 价格人数限制 -->
    <div class="counte bottom-gray-line">
      <div class="priceCounte">价格不限</div>
      <div class="peopleCount">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="keywords bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
     <div class="hotSuggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item">
          {{ item.tagText.text }}
        </div>
      </template>
     </div>
     <!-- 开始搜索 -->
      <div class="search">
        <span class="content" @click="search">
          开始搜索
        </span>
      </div>
      
  </div>
</template>

<script setup>
import router from '@/router';
import useCity from '@/stores/modules/city';
import useHome from '@/stores/modules/home';
import useMainStore from '@/stores/modules/main';
import { getDiffDays, getMonthDate } from '@/utils/getMonthDate';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
  // 获取位置
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

  // 回显城市名称
  const cityStore = useCity()
  const {currentCity} = storeToRefs(cityStore)

  // 计算日期
  const mainStore = useMainStore()
  const {start, end} = storeToRefs(mainStore)
  const startDate = computed(() => getMonthDate(start.value))
  const endDate = computed(() => getMonthDate(end.value))
  const DiffDays = ref(getDiffDays(start.value, end.value))

  // 展示日历组件
  const showDate = ref(false)

  // 日期“确定”Event
  function onConfirm(date) {
    start.value = date[0]
    end.value = date[1]
    DiffDays.value = getDiffDays(date[0], date[1])
    showDate.value = false
  }
  //自定义日期格式
  function formatter(day) {
    if (day.type === 'start') {
      day.bottomInfo = '入住';
    } else if (day.type === 'end') {
      day.bottomInfo = '离店';
    }
    const date = day.date.getDate() 
    const month = day.date.getMonth() + 1
    const today = {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    }
    if(date === today.day && month === today.month)day.text = '今天'
    return day;
  };
  // 获取homeStore中的数据
  const homeStore = useHome()
  const { hotSuggests } = storeToRefs(homeStore)

  //跳转搜索界面
  function search() {
    router.push({
      path: '/search',
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        currentCity: currentCity.value.cityName
      }
    })
  }
</script>

<style scoped>
  .search-pos {
    --van-calendar-popup-height:100%;
    
    .location {
      height: 44px;
      display: flex; 
      padding: 0 20px;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      .city {
        flex: 1;
      }
      
      .position {
        width: 80px;

        .myPos {
          margin-right: 5px;
          font-size: 12px;
        }
      }
    }

    .data {
      display: flex;
      height: 44px;
      padding: 0 20px;
      .keep {
        flex: 1;
        text-align: center;
        line-height: 44px;
        color: #666666;
      }
      .end {
        width: 100px;
      }

      span {
        font-size: 10px;
        color: #999999;
      }
      .time {
        font-size: 15px;
      }
    }

    .counte {
      display: flex;
      height: 44px;
      padding: 0 20px;
      align-items: center;
      color:#999999;
      
      .priceCounte {
        flex: 1;
      }
      .peopleCount {
        width: 100px;
        padding-left: 20px;
        height: 100%;
        line-height: 44px;
        border-left: 1px solid var(--border-color);
      }
    }
    .keywords {
      display: flex;
      height: 44px;
      padding: 0 20px;
      align-items: center;
      color:#999999;
    }

    .hotSuggest {
      padding: 0 20px;
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;

      .item {
        padding: 4px 8px;
        margin-right: 4px;
        margin-bottom: 4px;
        border-radius: 14px;
        background-color: #F1F3F5;
      }
    }

    .search {
      margin-top: 5px;
      display: flex;
      padding: 0 20px; 
      height: 44px;
      .content {
        flex: 1;
        background-image: var(--theme-gradient);
        font-size: 18px;
        color: #fff;
        text-align: center;
        line-height: 44px;
        border-radius: 22px;
      }
    }
  }
</style>