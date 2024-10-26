import { getCityAll } from "@/services";
import { defineStore } from "pinia";

const useCity = defineStore("city", {
  state: () =>({
    citiesAll: {},
    currentCity: {
      cityName: "武汉"
    }
  }),
  actions: {
    async fetchCityAll() {
      const res = await getCityAll()
      this.citiesAll = res.data
      console.log(res.data)
    }
  }
})
export default useCity