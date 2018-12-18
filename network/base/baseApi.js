import {$axios, $mock, $cross} from "./axios";
import {symbolContext} from "./decorator";

export class BaseApi {
  constructor(target) {
    if (target) {
      this.context.call(this, target)
    }
  }

  //由于装饰得到的是Api这个类而不是实例我们需要一些特殊的方法来实现
  context(target) {
    target.prototype[symbolContext] = this
  }
}

