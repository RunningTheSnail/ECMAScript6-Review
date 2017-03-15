/**
 * Created by toonew on 2017/3/15.
 */

class Foo {

}

class Bar extends Foo {

}

new Foo();

//Function 拥有prototype和__proto__属性

//表示方法的继承
//Function.prototype.__proto__指向父类的prototype

//表示构造函数的继承
//Function.__proto__指向父类
console.log(Foo.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__);

var foo = new Foo();

console.log(foo.__proto__ === Foo.prototype);

//表示没有这个属性 undefined
console.log(foo.prototype);

var bar = new Bar();

//对象只有__proto__属性  指向父类的原型对象
console.log(bar.__proto__ === Bar.prototype);

console.log(Bar.__proto__ == Foo);