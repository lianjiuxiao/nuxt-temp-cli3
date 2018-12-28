import axios from 'axios'
import qs from 'qs'

export const $axios = (options = {url: "", method: "post", extend: {}}) => {
  // console.log(arguments);
  let _options = Object.assign({
    method: 'post',
    ContentType: 'json',
    withCredentials: true
  }, options);

  if (_options.ContentType === 'form') {
    [_options.params, _options.data] = _options.method === 'get' ? [_options.params, ''] : ['', qs.stringify(_options.params)];
  } else {
    [_options.params, _options.data] = _options.method === 'get' ? [_options.params, ''] : ['', _options.params];
  }
  return axios(_options)
};
