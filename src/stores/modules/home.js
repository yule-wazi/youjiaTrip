import { defineStore } from 'pinia'
import { getCategroies, gethouseList, getSuggests } from '@/services'
const useHome = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houseList: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getCategroies()
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await gethouseList(this.currentPage++)
      this.houseList.push(...res.data)
    }
  }
})

export default useHome