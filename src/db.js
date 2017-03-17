/**
 * Created by toonew on 2017/3/17.
 */

//import会导致变量提升?

import mongoose from 'mongoose';

import bluebird from 'bluebird';

mongoose.Promise = bluebird;

// import Student from './models/student';

var Student = require('./models/student');

//连接本地mongodb test数据库
mongoose.connect('mongodb://localhost/test');

export {Student};



