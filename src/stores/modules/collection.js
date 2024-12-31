import { defineStore } from "pinia"
import { getCollectionAll } from '@/services'

const useCollection = defineStore('collection',{
  state: () => ({
    collectionList: [],
  }),
  actions: {
    async fetchCollectionAll(index = 0) {
      const res = await getCollectionAll(index)
      this.collectionList = await res.data.data.items
    }
  }
})
export default useCollection