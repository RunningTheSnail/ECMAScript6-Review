/**
 * Created by toonew on 2017/3/15.
 */

//接口
export var m = 1;

export var get = function () {

};

export default function () {
  console.log('default');
}

class A {
  set() {
    console.log('set');
  }
}

export {A}


