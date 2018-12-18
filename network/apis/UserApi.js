import {BaseApi} from '../base/baseApi'
import {controller, http} from "../base/decorator";

@controller('/webUser')
class UserApi extends BaseApi {
  constructor() {
    super(UserApi);
  }

  before(option) {

  }

  @http('/getUserInfo')
  async getUserInfo(option) {
    console.log('option>>>>>>>>>>>');
    console.log(option);
    return await Object.assign(option, {name: 'listener'})
  }
}

export default new UserApi()
