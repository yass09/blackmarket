'use-strict';

const {Schema} = require('mongoose');

const UserModel = new Schema({
  mail:{
    type: String,
    lowercase:true,
    unique: true,
    required:true
  },
  hash:{
    type: String,
    required:true
  },
  username:{
    type:String,
    unique:true,
    // required: true
  },
  profilePicture:{
    type:String,
    unique:true,
    required: false
  },
  firstName:{
    type:String,
    unique:true,
    // required: true
  },
  lastName:{
    type:String,
    unique:true,
    // required: true
  },
  country:{
    type:String,
    unique:true,
    // required: true
  },
  city:{
    type:String,
    unique:true,
    // required: true
  },
  token:{
    type:String,
    unique:true,
    required: false
  }
});

module.exports = UserModel;
