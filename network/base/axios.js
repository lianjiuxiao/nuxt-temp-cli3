import axios from 'axios'
import qs from 'qs'

const getUrl = (url) => {
  if (process.env.NODE_ENV == 'development') {
    return `/api${url}`;
  } else if (process.env.NODE_ENV == 'debug') {
    return `/api${url}`;
  } else if (process.env.NODE_ENV == 'production') {
    return `${url}`;
  }
};
const mockUrl = (url) => {
  return `/mock${url}`;
};


const _axios = (options) => {
  console.log(arguments);
  let _options = Object.assign({
    method: 'post',
    withCredentials: true
  }, options);
  [_options.params, _options.data] = _options.method === 'get' ? [_options.params, ''] : ['', qs.stringify(_options.params)];
  return axios(_options)
    .then(res => {
      let _res = res.data;
      return _res
    })
    .catch(e => {
      return e
    })
};

/*
* $axios  $mock
* options 请查看axios 官方api
*
* */

export const $axios = (options = {url: "", method: "post"}) => {
  return _axios(
    Object.assign(options, {
      url: getUrl(options.url)
    },)
  )
};
export const $mock = (options = {url: "", method: "post"}) => {
  return _axios(
    Object.assign(options, {
      mode: 'mock',
      url: mockUrl(options.url)
    },)
  )
};
export const $cross = (options = {url: "", method: "post"}) => {
  return _axios(options)
}
