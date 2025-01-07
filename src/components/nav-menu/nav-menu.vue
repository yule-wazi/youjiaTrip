<template>
  <div class="menu">
    <van-icon name="wap-nav" @click="isShow = true"/>
    <van-overlay :show="isShow" @click="isShow = false" :z-index="9" :duration="0.3"/>
    <transition>
      <div class="wrapper" v-if="isShow">
        <div class="exit" @click="isShow = false"><van-icon name="cross" /></div>
        <div class="content">
          <ul>
            <template v-for="item in data">
              <li class="item" @click="routerTo(item)">
                <div class="icon"><van-icon :name="item.iconfont" /></div>
                <div class="text">{{ item.context }}</div>
              </li>
            </template>
            <li class="item" @click="logOut">
              <div class="icon"><span class="iconfont">&#xe67f;</span></div>
              <div class="text">退出登录</div>
            </li>
          </ul>
          <div class="darkBtn">
            <div class="text">深色模式</div>
            <van-switch v-model="checked" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { defineProps } from 'vue';
import data from '@/assets/data/tab-bar-data';
import { useRouter } from 'vue-router';
import useNavMenu from '@/stores/modules/nav-menu';
import { storeToRefs } from 'pinia';

//接收父组件传入的参数
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

//展示菜单 
const isShow = ref(props.show)
// 路由
const route = useRouter()
//关闭菜单&&跳转
const routerTo = (item) => {
  isShow.value = false
  setTimeout(() => {
    const path = item.path ? item.path : item
    route.push(path)
  },300)
}
// 深色模式
const navMenuStore = useNavMenu()
const { isActive } = storeToRefs(navMenuStore)
const checked = ref(isActive.value)
// 监听模式转换
watch(checked, () => {
  //将每次变化都实时传给pinia管理
  isActive.value = checked.value
  if(checked.value) {
    document.documentElement.classList.add("dark-mode")
  } else {
    document.documentElement.classList.remove("dark-mode")
  }
})
// 退出登录 
const logOut = () => {
  localStorage.removeItem('token')
  routerTo('/home')
}
</script>

<style lang="less" scoped>
  .menu {
    .v-enter-from ,
    .v-leave-to {

      transform: translateX(100%);
    }
    .v-enter-to ,
    .v-leave-from {
      transform: translateX(0);
    }
    .v-enter-active ,
    .v-leave-active{
      transition: all .3s ease
    }
    .wrapper {
      position: fixed;
      right: 0;
      top: 0;
      z-index: 100;
      height: 100%;
      width: 60%;
      color: var(--text-color);
      padding-top: 35px;
      background-color: var(--bg-color);
      .exit {
        position: absolute;
        right: 20px;
        top: 8px;
        height: 36px;
        width: 36px;
        border-radius: 5px;
        text-align: center;
        line-height: 36px;
        font-size: 25px;
        color: rgba(102,102,102);
        &:active {
          background-color: #99999988;
        }
      }
      .content {
        .item {
          display: flex;
          margin: 0px 0px 25px 35px;
          font-size: 15px;
          height: 40px;
          width: 130px;
          justify-content: start;
          align-items: center;
          &:first-child ,
          &:last-child {
            padding-bottom: 20px;
            border-bottom: 1px solid #9999995e;
          }
          .icon {
            margin-right: 20px;
            color: var(--text-color);
            .iconfint {
              color: var(--text-color);
            }
          }
          
        }
        .darkBtn {
          display: flex;
          justify-content: start;
          align-items: center;
          .text {
            font-size: 14px;
            color: var(--text-color);
            margin: 0px 10px 0px 40px;
          }
        }
      }
    }
  }
</style>