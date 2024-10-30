import { getDetailInfos } from "@/services";
import { defineStore } from "pinia";

const useDetails = defineStore("details", {
  state: () => ({
    detailInfos: {},
    houseId: ""
  }),
  actions: {
    async fetchDetailInfos() {
      const res = await getDetailInfos(this.houseId)
      this.detailInfos = res.data
      console.log(res.data)
    }
  }
})

export default useDetails