import UserApi from './apis/UserApi'

export function getUserInfo(option = {}) {
  return UserApi.getUserInfo(option)
}
