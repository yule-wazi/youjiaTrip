<template>
  <div class="section">
    <div class="header">
      <h2>{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        <span>默认内容</span>
      </slot>
    </div>
    <div class="footer">
      <span>{{ more }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: "默认标题"
    },
    more: {
      type: String,
      default: "更多"
    }
  })
</script>

<style lang="less" scoped>
  .section {
    padding: 12px 16px;
    border-top: 10px solid var(--border-color);
    .header {
      height: 52px;
      border-bottom: 2px solid var(--border-color);
      h2 {
        font-size: 20px;
        font-weight: 600;
        color: var(--text-color);
        line-height: 52px;
      }
    }
    .footer {
      display: flex;
      padding: 16px 0;
      font-size: 14px;
      justify-content: end;
      font-weight: 600;
      color: var(--primary-color);
    }
  }
</style>