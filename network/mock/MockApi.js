import {BaseApi} from '../base/baseApi'
import {controller, get, post} from "../base/decorator";
import Mock from 'mockjs'

const Random = Mock.Random

@controller('/mock')
class MockApi extends BaseApi {
  constructor() {
    super(MockApi);
  }

  before(option) {
    // console.log("执行了before方法");
  }

  @get('/city')
  async getCity(option) {
    return await this.$ajax(option).then(res => {
      res.form = "拦截并请求easy-mock"
      return res
    })
  }

  @get('/userInfo')
  async getUserInfo(option) {
    return Mock.mock({
      from: '本地模拟',
      name: '@name',
      email: '@email',
      createTime: '@date'
    })
  }

  @get('/getTableData')
  getTableData(option) {
    return Mock.mock({
      from: '本地模拟',
      name: '@name',
      email: '@email',
      createTime: '@date'
    })
  }

  @get('/getDragList')
  async getDragList(option) {
    return Mock.mock({
      "success|10001-10004": 10001,
      "data": {
        "projects|3-10": [{
          "name": "演示用",
          "url": "@url",
          "email": "@email",
          "address": "@county(true)",
          "string|1-10": "★",
          "number|1-100": 100,
          "boolean|1-2": true,
          "object|2": {
            "310000": "上海市",
            "320000": "江苏省",
            "330000": "浙江省"
          }
        }]
      }
    })
  }
}

export default new MockApi()
