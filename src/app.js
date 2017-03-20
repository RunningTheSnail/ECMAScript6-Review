/**
 * Created by toonew on 2017/3/20.
 */

var express = require('express');

var path = require('path');

var app = express();

console.log(path.dirname(__dirname));

//设置静态资源
// app.use(express.static(path.dirname(__dirname) + "/public"));

//路由 首先都带有 /
app.use('/image',express.static(path.dirname(__dirname) + "/public"))

// 方法  ， 路由  ，回调函数
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, function () {
  console.log('listen 3000 port');
});