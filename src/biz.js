/**
 * Created by toonew on 2017/3/17.
 */

import StudentDao from './dao/student';

function getAll() {
  StudentDao.getAll()
      .then(function (data) {
        console.log(data);
      });
}

function add() {
  var student = {
    name: 'RunningSnail',
    age: 30,
    high: "185cm"
  };

  StudentDao
      .add(student)
      .then(function (data) {
        console.log('add:' + data);
      })
}

function update(id, name) {
  StudentDao.update(id, name)
      .then(function (data) {
        console.log(data);
      });
}

// add();
// update("HandSome", "109q");



