import MyRequset from '../request'

export function getOrderList(index) {
  const type = [
    'all',
    'pend'
  ]
  return MyRequset.get({
    url:"/order/list",
    params: {
      type: type[index]
    }
  })
}
