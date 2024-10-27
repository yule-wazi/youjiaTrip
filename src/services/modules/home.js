import MyRequest from '../request'

export function getSuggests() {
  return MyRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getCategroies() {
  return MyRequest.get({
    url: "/home/categories"
  })
}

export function gethouseList(currentPage) {
  return MyRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}