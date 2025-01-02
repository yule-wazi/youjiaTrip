<template>
  <div class="collection-item">
    <div class="list">
      <template v-for="item in collectionList">
        <div class="item">
            <div class="Img">
            <img :src="item.defaultPicture" alt="">
            <div class="comment-score">{{ item.commentBrief.overall }}分</div>
            <div class="like"><van-icon name="like" color="#fff"/></div>
            <div class="comment-count">
              <div class="chat"><van-icon name="comment" color="#fff"/></div>
              <div class="num">{{ item.commentBrief.totalCount }}</div>
            </div>
          </div>
          <div class="content">
            <div class="desc">
              <div class="address">{{ address(item.address) }}</div>
              <template v-for="i in item.unitSummeries">
                <div class="text">{{ i.text }}</div>
              </template>
            </div>
            <div class="title">{{ item.unitName }}</div>
            <div class="price">
              <div class="finalPrice">
                <span class="mark">￥</span>
                <span class="num">{{ item.finalPrice }}</span>
              </div>
              <div class="productPrice" v-if="discount(item)">
                <span class="mark">￥</span>
                <span class="num">{{ item.productPrice }}</span>
              </div>
              <div class="tip" v-if="discount(item)">
                <span class="text">已省￥{{ discount(item) }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import useCollection from '@/stores/modules/collection';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const collectionStore = useCollection()
const { collectionList } = storeToRefs(collectionStore)

// 劫持address数据限制字符串长度
const address = (str) => {
  if (str.length >= 8) {
    return str.slice(0,9) + '...'
  } else {
    return str
  }
}
// 打折提示
const discount = (item) => {
  return item.productPrice - item.finalPrice >= 0 ? item.productPrice - item.finalPrice : 0
}
</script>

<style lang="less" scoped>
  .collection-item {
    .list {
      padding: 0 20px;
      margin-top: 60px;
      .item {
        width: 100%;
        padding-bottom: 10px;
        .Img {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 220px;
          img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .comment-score {
            position: absolute;
            left: 10px;
            bottom: 15px;
            padding: 2px 8px;
            border-radius: 10px;
            background-color: #E9E8E8;
            font-size: 10px;
            font-weight: 700;
          }
          .like {
            position: absolute;
            right: 10px;
            top: 50px;
            font-size: 30px;
          }
          .comment-count {
            position: absolute;
            right: 10px;
            top: 100px;
            font-size: 30px;
            .num {
              width: 30px;
              font-size: 15px;
              text-align: center;
              color: #fff;
            }
          }
        }
        .content {
          margin-top: 10px;
          .desc {
            display: flex;
            align-items: center;
            .address {
              font-size: 11px;
              padding: 3px;
              border-radius: 3px;
              color: var(--border-color);
              background-color: #3f4954;
              
            }
            .text {
              font-size: 12px;
              color: #999;
              margin-left: 5px;
            }
          }
          .title {
            font-size: 18px;
            margin-top: 10px;
            color: #333;
            text-align: justify;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .price {
            display: flex;
            .finalPrice {
              font-size: 25px;
              margin-top: 10px;
              font-weight: 400;
              color: #ff6e16;
              font-family:Verdana, Geneva, Tahoma, sans-serif;
              .mark {
                font-size: 15px;
              }
            }
            .productPrice {
              font-size: 12px;
              text-decoration:line-through;
              margin: 22px 0 0 0;
              color: #999;
              font-family: TujiaFont-Number;
              .mark {
                font-size: 12px;
              }
            }
          }
          .tip {
            font-size: 10px;
            margin: 20px 0 0 2px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            height: 20px;
            .text {
              padding: 3px;
              background-color: #FFECE9;
              font-weight: 500;
              color: rgb(250, 87, 65);
              border-radius: 5px
            }
          }
        }
      }
    }
  }
</style>