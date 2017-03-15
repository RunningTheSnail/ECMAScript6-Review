/**
 * Created by toonew on 2017/3/15.
 */
class A {
  constructor() {
    this.x = 3;
    this.y = 3;
  }

  info() {
    console.log(this);
    console.log(this.y);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 4;
  }

  //输出undefined
  get() {
    //super表示父类的原型对象??
    console.log(super.y);
  }
}

var b = new B();

b.get();

//Class内部只有静态方法没有静态属性
class C {
  static get() {
    console.log("C.get()");
  }
}

C.name = "C";

C.get();

console.log(C.name);