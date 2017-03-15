/**
 * Created by toonew on 2017/3/14.
 */
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.info = this.info.bind(this);
  }
}

User.prototype.get = function () {

};

Object.assign(User.prototype, {
  info(){
    console.log(this.username + "---" + this.password);
  }
});

// console.log(User === User.prototype.constructor);

var properties = Object.keys(User.prototype);

for (var i = 0; i < properties.length; i++) {
  console.log(properties[i]);
}

var user = new User("jerry", "jerry");

// user.info();

const {info}=user;

// info();


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
console.log(a.empty());
