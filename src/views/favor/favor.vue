<template>
  <div class="favor">
    <div class="nav-bar">
      <nav-bar>
        <template #left>
        </template>
        <template #center>
          <div class="tab">
            <template v-for="(item, index) in ['我的收藏','我的历史']">
              <div class="item" 
              @click="clkActive(index)"
              :class="{active:index === currentIndex}"
              >{{ item }}</div>
            </template>
          </div>
        </template>
        <template #right>
          <van-icon name="wap-nav" />
        </template>
      </nav-bar>
    </div>
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
              <span class="mark">￥</span>
              <span class="num">{{ item.finalPrice }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="footer">
      <div class="text">没有更多数据了</div>
    </div>
  </div>
</template>

<script setup>
import navBar from '@/components/nav-var/nav-bar.vue';
import useCollection from '@/stores/modules/collection';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
// 切换内容
const currentIndex = ref(0);
const clkActive = (index) => {
  currentIndex.value = index
  
}

// 接收接口数据
const collectionStore = useCollection()
// 发送网络请求
collectionStore.fetchCollectionAll()
const { collectionList } = storeToRefs(collectionStore)

// 监听currentIndex变化
watch(currentIndex, () => {
  collectionStore.fetchCollectionAll(currentIndex.value)
  // console.log(collectionList.value)
})

// 劫持address数据限制字符串长度
const address = (str) => {
  if (str.length >= 8) {
    return str.slice(0,9) + '...'
  } else {
    return str
  }
}
</script>

<style lang="less" scoped>
  .favor {
    .nav-bar {
      position: fixed;
      top: 0;
      z-index: 9;
      background-color: #fff;
      border-bottom: 2px var(--border-color) solid;
      box-shadow: 0 1px 10px#9999999a ;
      .center {
        .tab {
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          font-weight: 400;
          .item {
            border: 1px var(--border-color) solid;
            text-align: center;
            line-height: 30px;
            padding: 0px 10px;
            border-radius: 5px;
          }
          .active {
            transition: background-color .5s ease;
            background-color: var(--primary-color);
            color: #fff;
          }
        }
      }
      .right {
        font-size: 25px;
        color: #fff;
      }
    }
    .list {
      padding: 0 20px;
      margin-top: 60px;
      .item {
        // background-color: orange;
        width: 100%;
        height: 350px;
        .Img {
          position: relative;
          img {
            border-radius: 10px;
            width: 100%;
          }
          .comment-score {
            position: absolute;
            left: 10px;
            bottom: 30px;
            padding: 1px 10px;
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
            font-size: 20px;
            margin-top: 10px;
            color: #ff6e16;
            font-family: TujiaFont-Number;
            .mark {
              font-size: 15px;
            }
          }
        }
      }
    }
    .footer {
      width: 100%;
      height: 150px;
      .text {
        font-size: 13px;
        color: #999;
        text-align: center;
      }
    }
  }
</style>