import UserApi from './apis/UserApi'

export function getCity(option = {}) {
  return UserApi.getCity(option)
}

export function getUserInfo(option = {}) {
  return UserApi.getUserInfo(option)
}

export function getTableData(option = {}) {
  return UserApi.getTableData(option)
}
