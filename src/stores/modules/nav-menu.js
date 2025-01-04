import { defineStore } from "pinia";

const useNavMenu = defineStore("navMenu",{
  state: () => ({
    isActive: false
  })
})
export default useNavMenu