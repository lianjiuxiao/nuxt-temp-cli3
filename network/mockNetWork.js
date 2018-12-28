import MockApi from './mock/MockApi'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

var mock = new MockAdapter(axios);


mock.onGet('/webUser/city').reply(config => {
  return [200, MockApi.getCity({})]
});

mock.onGet('/webUser/userInfo').reply(function (config) {
  return [200, MockApi.getUserInfo({})]
});


mock.onPost('/webUser/getTableData').reply(function (config) {
  return [200, MockApi.getTableData({})]
});

mock.onAny().passThrough()


// Mock.mock(/\/webUser\/getUserInfo/, MockApi.getUserInfo);
// Mock.mock(/\/webUser\/getTableData/, MockApi.getTableData);
// export default Mock


export default mock
