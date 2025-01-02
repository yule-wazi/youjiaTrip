import { defineStore } from "pinia"
import { getOrderList } from '@/services'

const data1 = {}
const data2 = {}
const useOrderList = defineStore('order',{
  state: () => ({
    orderList: [
      data1,
      data2
    ]
  }),
  actions: {
    async fetchOrderList(index) {
      const res = await getOrderList(index)
      this.orderList[index] = await res.data.data.orders
    }
  }
})
export default useOrderList