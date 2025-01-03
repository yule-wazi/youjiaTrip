<template>
  <div class="infos">
    <div class="houseName">{{ infos.houseName }}</div>
    <div class="tag">
      <template v-for="(item, index) in infos.houseTags" :key="index">
        <span 
        class="tagText" v-if="item.tagText" 
        :style="{color:item.tagText.color, background:item.tagText.background.color}
        ">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <div class="overall">{{ infos.commentBrief.overall }}</div>
        <div class="scoreTitle">{{ infos.commentBrief.scoreTitle }}</div>
        <div class="commentBrief">"{{ infos.commentBrief.commentBrief }}"</div>
      </div>
      <div class="right">
        <span class="totalCount">{{ infos.commentBrief.totalCount }}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="nearByPosition">
      <div class="left">
        {{ infos.nearByPosition.address }}
      </div>
      <div class="right">
        <span>地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    infos: {
      type: Object,
      default: () =>({})
    }
  })
</script>

<style lang="less" scoped>
  .infos {
    padding: 12px 16px;
    .houseName {
      font-weight: 600;
      font-size: 20px;
      color: var(--text-color);
      line-height: 24px;
      text-align: justify;
      margin-bottom: 10px;
    }
    .tag {
      display: flex;
      flex-wrap: wrap;
      .tagText {
        font-size: 12px;
        padding: 2px;
        margin-right: 3px;
        margin-bottom: 3px;
      }
    }
    .comment {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--item-color);
      border-radius: 5px;
      height: 30px;
      margin: 10px 0;
      padding: 10px;
      .left {
        display: flex;
        .overall {
          font-size: 18px;
          font-weight: 600;
          margin-right: 3px;
        }
        .scoreTitle {
          font-size: 12px;
          font-weight: 600;
          margin-top: 4px;
          margin-right: 3px;
        }
        .commentBrief {
          font-size: 12px;
          margin-top: 4px;
        }
      }
      .right {
        color: var(--primary-color);
        font-size: 12px;
        .totalCount {
          margin-right: 1px;
        }
      }
    }
    .nearByPosition {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--item-color);
      border-radius: 5px;
      height: 30px;
      margin: 10px 0;
      padding: 10px;
      .left {
        font-size: 13px;
        font-weight: 600;
      }
      .right {
        display: flex;
        flex-wrap: nowrap;
        color: var(--primary-color);
        font-size: 12px;
        .totalCount {
          margin-right: 1px;
        }
      }
    }
  }
</style>