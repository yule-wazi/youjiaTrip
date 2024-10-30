import MyRequest from '../request'

export function getDetailInfos(houseId) {
  return MyRequest.get({
    url:"/detail/infos",
    params: {
      houseId
    }
  })
}
