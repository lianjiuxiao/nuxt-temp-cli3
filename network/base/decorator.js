import {merge} from '@/common/utils/utils'

export const symbolPrefix = Symbol('prefix')
export const symbolContext = Symbol('context');

export function controller(path = '') {
  return (target) => {
    target.prototype[symbolPrefix] = path;
    target.prototype[symbolContext] = null;
  }
}

export function http(path = '') {
  return function (target, key, descriptor) {
    let method = descriptor.value;
    descriptor.value = async (arg) => {
      arg = Object.assign(arg, {
        url: `${target[symbolPrefix]}${path}`
      })
      return await method.call(target[symbolContext], arg)
    }
  }
}

