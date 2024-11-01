<template>
  <div class="Details" ref="detailRef">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="tab" >
      <van-tabs  v-model:active="active" v-if="isShowTab" @click-tab="onClickTab()">
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
import { computed, ref } from 'vue';
// 离开详情页
  function onClickLeft() {
    // 初始化详情页数据
    const detailsStore = useDetails()
    detailsStore.mainPart = {}

    router.back()
  }
  
  const detailsStore = useDetails()
  const {mainPart, houseId} = storeToRefs(detailsStore)
  
//   // 传入详情页id以便向服务器发送请求
  const route = useRoute()
  houseId.value = route.params.id
  
//   // 发送请求
  detailsStore.fetchDetailInfos()

// 监听滚动位置
  const {scrollTop} = useScroll()
  const isShowTab = computed(() => {
    return scrollTop.value >= 300
  })

  // tab切换
  const detailRef = ref()
  const active = ref(0)
  function onClickTab() {
    sectionEls[active.value].scrollIntoView({ behavior: 'smooth' ,block: 'center'});
  }
  // 将元素存入数组以备查找所在Y轴高度
  let sectionEls = []
  function getSectionRef(value) {
    if(value) sectionEls.push(value.$el)
  }

  
  
</script>

<style scoped>
  .Details {
    .tab {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
    }
    .footer {
      height: 250px;
      background-color: #F1F3F5;
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