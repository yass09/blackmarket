'use-strict';

const {Schema} = require('mongoose');

const UserModel = new Schema({
  mail:{
    type: String,
    lowercase:true,
    unique: true,
    required:true
  },
  password:{
    type: String,
    unique:true,
    required:true
  },
  // username:{
  //   type:String,
  //   unique:true,
  //   required: true
  // },
  // profilePicture:{
  //   type:String,
  //   unique:true,
  //   required: false
  // },
  // firstName:{
  //   type:String,
  //   unique:true,
  //   required: true
  // },
  // lastName:{
  //   type:String,
  //   unique:true,
  //   required: true
  // },
  // country:{
  //   type:String,
  //   unique:true,
  //   required: true
  // },
  // region:{
  //   type:String,
  //   unique:true,
  //   required: true
  // },
  // city:{
  //   type:String,
  //   unique:true,
  //   required: true
  // },
  // postCode:{
  //   type:String,
  //   unique:true,
  //   required: false
  // },
  // address:{
  //   type:String,
  //   unique:true,
  //   required: false
  // },
  // phone:{
  //   type:Number,
  //   unique:true,
  //   required: false
  // },
  _products:[{
    type: Schema.Types.ObjectId, ref:'Products'
  }]
  // _reviews:[{
  //   type: Schema.Types.ObjectId, ref:'Reviews'
  // }]
});

module.exports = UserModel;
