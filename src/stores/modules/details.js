import { getDetailInfos } from "@/services";
import { defineStore } from "pinia";

const useDetails = defineStore("details", {
  state: () => ({
    detailInfos: {},
    mainPart: {},
    houseId: ""
  }),
  actions: {
    async fetchDetailInfos() {
      const res = await getDetailInfos(this.houseId)
      this.detailInfos = res.data
      this.mainPart = res.data.mainPart
    }
  }
})

export default useDetails