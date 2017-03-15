/**
 * Created by toonew on 2017/3/14.
 */

function d(value) {
  console.log(value);
}


let [x, y] = [1, 2, 3];
d(x);
d(y);

let [a, [b], g] = [1, [2, 3], 4];
d(a); // 1
d(b);// 2
d(g); // 4

let {bar, foo}={
  foo: 'f',
  bar: 'b'
};
d(foo);
d(bar);

let obj = {foo: "aaa", bar: "bbb"};

let {foo :f, bar :q}=obj;
d(f);
d(q);
