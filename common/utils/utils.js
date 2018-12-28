// typeOf, return 'array', 'object', 'function', 'null', 'undefined', 'string', 'number'
export const typeOf = input => {
  return ({}).toString.call(input).slice(8, -1).toLowerCase()
}

// 合并对象属性（在原始对象上进行修改）
export const merge = (obj, options) => {
  if (obj && options) {
    for (let p in options) {
      if (typeOf(obj[p]) === 'object' && typeOf(options[p]) === 'object') {
        merge(obj[p], options[p])
      } else {
        obj[p] = options[p]
      }
    }
  }
  return obj
}

// 判断是否有值：全部都是空格或其他诸如tab的话，也作为无值看待
export function hasValue(val) {
  if (typeof val === "object") {
    return val !== null && val !== {} && JSON.stringify(val).length > 2;
    // return Object.prototype.toString.call(val) === "[object Array]" ? val.some(e => e !== undefined && e != null && e !== "") : false;
  } else {
    return val !== "" && val !== undefined && !/^\s+$/.test(val);
  }
}

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}
