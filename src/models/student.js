/**
 * Created by toonew on 2017/3/17.
 */
import mongoose from 'mongoose';

var Student = mongoose.model('Student', {
  id: {type: String, unique: true},
  name: String,
  age: Number,
  high: String
});

module.exports = Student;