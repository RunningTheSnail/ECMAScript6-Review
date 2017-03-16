/**
 * Created by toonew on 2017/3/16.
 */
import 'babel-polyfill';

var fs = require('fs');


/**
 * 读取文件辅助类
 * @param fileName
 * @returns {Promise}
 */
var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data.toString());
      }
    })
  })
};

//async return promise

var asyncReadFile = async function () {
  return await readFile(__filename);
};

asyncReadFile()
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
