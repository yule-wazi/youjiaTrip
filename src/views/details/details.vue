<template>
  <div class="Details" ref="detailRef">
    <nav-bar/>
    <div class="tab" >
      <van-tabs  v-model:active="active" 
      v-if="isShowTab" 
      @click-tab="onClickTab()" 
      >
        <template v-for="(item, index) in ['概览', '设施', '评论']">
          <van-tab :title="item" />
        </template>
      </van-tabs>
    </div>
    <div class="detailsData" v-if="mainPart.topModule" v-memo="[mainPart]" >
      <swipe :ref="getSectionRef" :swipe="mainPart.topModule.housePicture.housePics"/>
      <infos :infos="mainPart.topModule"/>
      <facility :ref="getSectionRef" :facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <comment :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <price-description :priceDesc="mainPart.introductionModule"/>
      <div class="footer">
        <div class="ensure">
          <img src="@/assets/img/tq-ensure-icon.png" alt="" class="tq">
          <img src="@/assets/img/icon-bf-i.png" alt="" class="icon">
        </div>
        <div class="promise">
          <div class="business">查看证照信息</div>
          <div class="txt">民宿预订频道由途家提供服务</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {name:"detail"}
</script>
<script setup>
import router from '@/router';
import { useRoute } from 'vue-router';
import useDetails from '@/stores/modules/details';
import { storeToRefs } from 'pinia';
import swipe from './cpns/01_swipe.vue';
import infos from './cpns/02_infos.vue';
import facility from './cpns/03_facility.vue'
import comment from './cpns/04_comment.vue'
import priceDescription from './cpns/05_priceDescription.vue'
import useScroll from '@/hooks/useScroll';
import { computed, ref, watch } from 'vue';
import navBar from '@/components/nav-bar/nav-bar.vue';
  
  const detailsStore = useDetails()
  const {mainPart, houseId} = storeToRefs(detailsStore)
  
//   // 传入详情页id以便向服务器发送请求
  const route = useRoute()
  houseId.value = route.params.id
  
//   // 发送请求
  detailsStore.fetchDetailInfos()

// 监听滚动位置
  const {scrollTop} = useScroll(false)
  const isShowTab = computed(() => {
    return scrollTop.value >= 300
  })

  // tab切换
  const detailRef = ref()
  const active = ref(0)
  function onClickTab() {
    sectionEls[active.value].scrollIntoView({ behavior: 'smooth' ,block: 'start'});
    setTimeout(() => {
      flag.value = 0
    },500)
    flag.value = 1
  }
  // 将元素存入数组以备查找所在Y轴高度
  let sectionEls = []
  function getSectionRef(value) {
    if(value) sectionEls.push(value.$el)
  }
  // 根据滚动定位tab的active
  const flag = ref(0)//定义标志来判断是否监听滚动
  watch(scrollTop, (newValue) => {
    if(flag.value) return
    let index
    for(index = 0 ; index < sectionEls.length; index++) {
      if(newValue < sectionEls[index].offsetTop - 44) break;
    }
    active.value = index - 1
  })
  
  
</script>

<style scoped>
  .Details {
    background-color: var(--bg-color);
    .tab {
      --van-tabs-nav-background:var(--item-color);
      --van-tab-text-color:var(--subText-color);
      --van-tab-active-text-color:var(--text-color);
      --van-tabs-bottom-bar-color:var(--primary-color);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
    }
    .footer {
      height: 250px;
      background-color: var(--bg-color);
      padding: 1px;
      text-align: center;
      .ensure {
        margin-top: 30px;
          .tq {
            width: 150px;
            margin-right: 5px;
          }
          .icon {
            width: 20px;
            height: 20px;
          }

      }
      .promise {
        color: #7688a7;
        .business {
          margin-top: 10px;
        }
        .txt {
          margin-top: 10px;
        }
      }
    }
  }
</style>