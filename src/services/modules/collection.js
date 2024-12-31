import MyRequset from '../request'

export function getCollectionAll(index) {
  const urls = [
    "/favor/list",
    "/favor/history"
  ]
  return MyRequset.get({
    url:urls[index]
  })
}
