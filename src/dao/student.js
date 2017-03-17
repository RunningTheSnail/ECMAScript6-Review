/**
 * Created by toonew on 2017/3/17.
 */
import {Student} from '../db';
import 'babel-polyfill';

class StudentDao {
  static add(s) {
    var student = new Student();
    for (var key in s) {
      student[key] = s[key];
    }
    var promise = student.save();
    console.log(promise);
    return promise;
  }

  static getAll() {
    return Student.find();
  }

  static update(id, name) {
    var promise = Student.update({name: id}, {$set: {name: name}}).exec();
    console.log(promise);
    return promise;
  }
}

Student.findOne()
    .select('name age')
    .then(function (data) {
      console.log(data);
    });

Student
    .find({age: {$gt: 25, $lte: 30}})
    .count()
    .then(function (data) {
      console.log(data);
    });

//只查询部分信息
Student.find({}, {age: false, high: false})
    .then(function (data) {
      console.log(data)
    });

export default StudentDao;

