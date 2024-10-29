import { defineStore } from "pinia"

const start = new Date()
const end = new Date()
end.setDate(end.getDate() + 1)

const useMainStore = defineStore("main", {
  state: () => ({
    start,
    end
  })
})

export default useMainStore