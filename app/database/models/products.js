'use-strict';

const {Schema} = require('mongoose');

const ProductModel = new Schema({
  // pictures:{
  //   type: Array,
  //   required: true
  // },
  _userId:{
    type: Number, ref:'Users'
  },
  brand:{
    type: String,
    required: true
  },
  stylecode:{
    type: String
  // },
  // series:{
  //   type: String,
  //   required: true
  // },
  // model:{
  //   type: String,
  //   required: true
  // },
  // name:{
  //   type: String,
  //   required: true
  // },
  // size:{
  //   type: Array,
  //   required: true
  // },
  // condition:{
  //   type: String,
  //   enum: ['Deadstock','Very good','Good','Average']
  // },
  // price:{
  //   type: Number,
  //   required: true
  }
});

module.exports = ProductModel;
