/**
 * Created by toonew on 2017/3/15.
 */

class Foo {

}

new Foo();

console.log(Foo.prototype.__proto__ === Object.prototype);

var foo = new Foo();

console.log(foo.__proto__ === Foo.prototype);

//表示没有这个属性 undefined
console.log(foo.prototype);