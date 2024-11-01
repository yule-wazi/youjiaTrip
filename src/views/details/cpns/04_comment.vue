<template>
  <div class="comment">
    <detail-section title="热门评论" :more="`查看全部${comment.totalCount}条数据`">
      <div class="overall">
        <div class="left">
          <div class="score">{{ comment.overall }}</div>
          <div class="text">
            <div class="title">{{ comment.scoreTitle }}</div>
            <div class="count">{{comment.totalCountStr}}条评论</div>
            <van-rate :model-value="comment.overall" 
            readonly allow-half color="#FF9F46" size="15px"/>
          </div>
        </div>
        <div class="right">
          <template v-for="(item, index) in comment.subScores" :key="index">
            <div class="desc">
              {{ item }}
            </div>
          </template>
        </div>
      </div>
      <div class="tag">
        <template v-for="(item, index) in comment.commentTagVo" :key="index">
          <div class="item">{{ item.text }}</div>
        </template>
      </div>
      <div class="user">
        <div class="userInfo">
          <img :src="comment.comment.userAvatars" alt="">
          <div class="text">
            <div class="id">{{ comment.comment.userName }}</div>
            <div class="time">{{ comment.comment.checkInDate }}</div>
          </div>
        </div>
        <div class="content">{{ comment.comment.commentDetail }}</div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
  import detailSection from '@/components/detailSection/detailSection.vue';
  const props = defineProps({
    comment: {
      type: Object,
      default: {}
    }
  })
  // console.log(props.comment)
</script>

<style lang="less" scoped>
  .comment {
    .overall {
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      border-top: 0px;
      margin: 10px 0;
      .left {
        display: flex;
        .score {
          font-size: 45px;
          font-weight: 700;
          margin-right: 10px;
          border-bottom: 5px solid var(--primary-color);
        }
        .text {
          display: flex;
          flex-direction: column;
          .title {
            margin-top: 3px;
          }
          .count {
            margin-top: 3px;
            font-size: 12px;
            color: #666;
          }
        }
      }
      .right {
        display: grid;
          grid-template-columns: 50% 50%;
          height: 55px;
          width: 45%;
        .desc {
          font-size: 12px;
          color: #666;
        }
      }
    }
    .tag {
      display: flex;
      flex-wrap: wrap;
      .item {
        padding: 4px;
        background-color: #F5F7FB;
        margin: 5px;
        font-size: 12px;
        border-radius: 3px;
      }
    }
    .user {
      margin: 10px 0;
      background-color: #F7F9FB;
      padding: 10px;
      border-radius: 5px;
      .userInfo {
        display: flex;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .text {
          .time {
            margin-top: 3px;
            font-size: 12px;
            color: #666;
          }
        }
      }
      .content {
        margin-top: 10px;
        font-size: 12px;
        
      }
    }
  }
</style>