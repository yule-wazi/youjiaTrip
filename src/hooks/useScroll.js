import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from "vue"
import { throttle } from 'underscore'


const isReachBottom = ref(false)
const scrollTop = ref(0)
const scrollHeight = ref(0)
const clientHeight = ref(0)

export default function useScroll(isReach = true) {//防止非home组件使用请求到home列表数据
  const reachScroll = throttle(() => {
    scrollHeight.value = document.documentElement.scrollHeight
    scrollTop.value = document.documentElement.scrollTop
    clientHeight.value = document.documentElement.clientHeight

    if(clientHeight.value + scrollTop.value >= scrollHeight.value && isReach) {
      isReachBottom.value = true
    }
  },100)
  
  // 挂载时监听滚动
  onMounted(() => {
    window.addEventListener("scroll", reachScroll)
  })
  // 卸载时去除监听
  onUnmounted(() => {
    window.removeEventListener("scroll", reachScroll)
  })
  // 激活时监听
  onActivated(() => {
    window.addEventListener("scroll", reachScroll)
  })
  // 失活时监听
  onDeactivated(() => {
    window.removeEventListener("scroll", reachScroll)

  })
  

  return {isReachBottom, scrollTop, scrollHeight, clientHeight}
}
