var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  Fname: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Lname: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Email:{
    type: String,
    required: 'Kindly enter the name of the task'
  },
  password:{
    type: String,
    required: 'Kindly enter the name of the task'
  }

 });

module.exports = mongoose.model('Tasks', TaskSchema);