<template>
  <div class="facility">
    <detail-section title="房屋设施" more="查看全部设施">
    <div class="content">
      <template v-for="(item, index) in filteFacility" :key="index">
        <div class="item">
          <div class="houseFacilitys">
            <img :src="item.icon" alt="">
            <div class="groupName">{{ item.groupName }}</div>
          </div>
          <div class="facilitys">
            <template v-for="(im, ix) in item.facilitys.slice(0, 4)" :key="ix">
              <div class="facilityName">
                <img src="@/assets/img/logo_yes.png" alt="">
                <div class="name">{{ im.name }}</div> 
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detailSection/detailSection.vue';
import { computed } from 'vue';
  const props = defineProps({
    facility: {
      type: Object,
      default: {}
    }
  })
  //过滤设施数据（只拿取facilitySort含有的索引）
  const filteFacility = computed(() => {
    return props.facility.houseFacilitys.filter((item, index) => 
    props.facility.facilitySort.includes(index))
  })

  // console.log(props.facility)
</script>

<style lang="less" scoped>
  .facility {
    .content {
      margin: 10px 0;
      background-color: #F7F9FB;
      padding: 10px 0px;
      border-radius: 5px;
      .item {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        .houseFacilitys {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100px;
          margin-right: 20px;
          img {
            width: 25px;
            height: 25px;
            margin-bottom: 5px;
          }
          .groupName {
            font-size: 12px;
          }
        }
        .facilitys {
          display: grid;
          grid-template-columns: 50% 50%;
          width: 100%;
          .facilityName {
            display: flex;
            img {
              width: 10px;
              height: 10px;
              margin-right: 5px;
            }
            .name {
              font-size: 12px;
              align-items: center;
            }
          }
        }
      }
    }
  }
</style>