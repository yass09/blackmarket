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
    required: true
  },
  profilePicture:{
    type:String
  },
  country:{
    type:String,
    required: true
  },
  city:{
    type:String,
    required: true
  }
});

module.exports = UserModel;
