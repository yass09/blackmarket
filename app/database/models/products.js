'use-strict';

const {Schema} = require('mongoose');

const ProductModel = new Schema({
  _owner:{
    type: Schema.Types.ObjectId, ref:'Users'
  },
  pictures:{
    type: Array,
    // required: true
  },
  brand:{
    type: String,
    required: true
  },
  model:{
    type: String,
    // required: true
  },
  colorway:{
    type: String,
    // required: true
  },
  name:{
    type: String,
    // required: true
  },
  size:{
    type: Array,
    // required: true
  },
  condition:{
    type: String,
    enum: ['Deadstock','Very good','Good','Average']
  },
  price:{
    type: Number,
    // required: true
  },
  sold: {
    type: Boolean,
    default: true,
  }
});

module.exports = ProductModel;
