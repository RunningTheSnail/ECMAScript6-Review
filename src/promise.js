/**
 * Created by toonew on 2017/3/16.
 */

var token = '123';

var promise = new Promise(function (resolve, reject) {
  if (token === '123') {
    resolve(true);
  } else {
    reject('错误');
  }
});

promise.then(function (data) {
  console.log('success:' + data);
}).catch(function (error) {
  console.log(error);
});
