import MyRequset from '../request'

export function getCityAll() {
  return MyRequset.get({
    url:"/city/all"
  })
}