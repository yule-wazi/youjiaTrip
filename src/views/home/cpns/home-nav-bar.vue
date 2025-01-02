<template>
  <div class="home-nav">
    <div class="nav-var">
      <nav-bar>
        <template #left>
          <span></span>
        </template>
        <template #center>
          <div class="title">友家旅途</div>
        </template>
      </nav-bar>
    </div>
    <div class="banner">
        <img src="@/assets/img/home-nav.jpg" alt="">
    </div>
      
  </div>
</template>

<script setup>
  import navBar from '@/components/nav-var/nav-bar.vue';
</script>

<style scoped>
  .home-nav {
    .nav-bar {
      height: 50px;
      border-bottom: 1px solid #a49999;
      display: flex;
      justify-content: center;
      align-items: center;

      .title {
        font-size: 20px;
        font-weight: 600;
        color: var(--primary-color)
      }
    }
    .banner {
      img {
        width: 100%;
      }
    }

    
  }
</style>