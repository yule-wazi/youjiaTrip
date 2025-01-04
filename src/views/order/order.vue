<template>
  <div class="order">
    <div class="nav-bar">
      <nav-bar>
        <template #center>
          <div class="title">订单列表</div>
        </template>
      </nav-bar>
    </div>
    <div class="nav-tab">
      <van-tabs v-model:active="active" 
      title-active-color=var(--primary-color) 
      swipeable>
        <template v-for="(text, index) in ['全部订单', '待支付']">
          <van-tab :title="text">
            <div class="list">
              <template v-for="item in orderList[index]">
                <div class="item">
                    <div class="header">
                      <div class="time">
                        <div class="startTime">{{ getTimeformat(item.checkInDate) }}</div>
                        <span>-</span>
                        <div class="endTime">{{ getTimeformat(item.checkOutDate) }}</div>
                      </div>
                      <div class="status" :style="{color: item.orderStatusDescColor}">{{ item.orderStatusDesc }}</div>
                    </div>
                  <div class="content">
                    <div class="Img">
                      <img :src="item.unitPicture" alt="">
                    </div>
                    <div class="desc">
                      <div class="name">{{ item.hotelName }}</div>
                      <div class="price">￥{{ item.prepayAmount }}</div>
                    </div>
                    <div class="operation">
                      <div class="pay" v-if="item.orderStatusDesc === '待支付'">去支付</div>
                      <div class="destroy" v-else>删除订单</div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="footer">
      <footer-text/>
    </div>
  </div>
</template>

<script setup>
import navBar from '@/components/nav-bar/nav-bar.vue';
import useOrderList from '@/stores/modules/order';
import footerText from '@/components/footer-text/footer-text.vue';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

const active = ref(0)

const orderStore = useOrderList()
// 发送网络请求
orderStore.fetchOrderList(active.value)
const { orderList } = storeToRefs(orderStore)
// 监听active
watch(active, () => {
  orderStore.fetchOrderList(active.value)
})
//获取时间
const getTimeformat = (str) => {
  const newStr = str.slice(5,7) + '.' + str.slice(8,10)
  return newStr
}

</script>

<style lang="less" scoped>
  .order {
    .nav-bar {
      position: fixed;
      z-index: 9;
      border-bottom: 1px var(--border-color) solid;
      background-color: var(--bg-color);
      .title {
        font-weight: 400;
      }
    }
    .nav-tab {
      --van-tab-text-color: var(--subText-color);
      --van-tabs-nav-background:var(--bg-color);
      background-color: var(--item-color);
      :deep(.van-tabs__wrap) {
        position: fixed;
        z-index: 5;
        top: 46px;
        left: 0;
        right: 0;
      }
      .list {
        padding: 10px;
        margin-top: 95px;
        .item {
          height: 170px;
          padding: 0 10px;
          background-color: var(--bg-color);
          margin-bottom: 15px;
          border-radius: 10px;
          .header {
            display: flex;
            height: 50px;
            padding: 0 10px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #9999995e;
            .time {
              display: flex;
              font-size: 18px;
              font-weight: 700;
              .startTime {
                margin-right: 5px;
              }
              .endTime {
                margin-left: 5px;
              }
            }
          }
          .content {
            display: flex;
            position: relative;
            margin-top: 15px;
            .Img {
              width: 90px;
              height: 60px;
              img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
              }
            }
            .desc {
              margin-left: 10px;
              .name {
                margin-bottom: 20px;
              }
            }
            .operation {
              position: absolute;
              right: 5px;
              bottom: -30px;
              font-size: 12px;
              .pay {
                border-radius: 5px;
                padding: 5px 10px;
                background-color: var(--primary-color);
                color: #fff;
              }
              .destroy {
                padding: 5px;
                border: 1px solid #9999995e;
                border-radius: 5px;

              }
            }
          }
        }
      }
    }
    .footer {
      background-color: var(--item-color);
    }
  }
</style>