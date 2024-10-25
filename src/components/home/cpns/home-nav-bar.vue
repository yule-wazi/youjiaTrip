<template>
  <div class="home-nav">
    <div class="nav-bar">
      <div class="title">友家旅途</div>
    </div>
    <div class="banner">
        <img src="@/assets/img/home-nav.jpg" alt="">
    </div>
      
  </div>
</template>

<script setup>
  
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