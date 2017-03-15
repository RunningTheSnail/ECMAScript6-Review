/**
 * Created by toonew on 2017/3/14.
 */
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    // this.info = this.info.bind(this);
  }

  //es6在原型上定义方法不可以被遍历,不可以被枚举
  info() {
    console.log("info");
  }

  set() {

  }
}

//ES5 这种方式在原型上定义方法可以被遍历
User.prototype.get = function () {

};

//批量定义原型方法
Object.assign(User.prototype, {
  info(){
    console.log(this.username + "---" + this.password);
  }
});

console.log(User === User.prototype.constructor);


var properties = Object.keys(User.prototype);

var propertyNames = Object.getOwnPropertyNames(User.prototype);

for (let property in propertyNames) {
  console.log("属性:" + propertyNames[property]);
}

for (var i = 0; i < properties.length; i++) {
  console.log("原型包含的属性" + properties[i]);
}

var user = new User("jerry", "jerry");

//instanceof 检测constructor.prototype 是否在object 的原型链上
console.log("instanceof:" + (user instanceof User));

console.log("判断:" + user.hasOwnProperty('set'));

// user.info();

const {info}=user;

info.bind(user)();


class A {

}

class B extends A {

}

//表示构造函数的继承
// console.log(B.__proto__ === A);

// console.log(B.prototype.__proto__ === A.prototype);

class MyArray extends Array {
  empty() {
    return this.length == 0;
  }
}

Array.prototype.empty = function () {

};

var a = new MyArray();
// a.push("jerry");
// console.log(a.empty());
