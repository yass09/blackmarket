'use-strict';

const {Schema} = require('mongoose');

const ProductModel = new Schema({
  _owner:{
    type: Schema.Types.ObjectId, ref:'Users'
  },
  _buyer:{
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
  productionYear:{
    type: Number,
    // required: true
  },
  size:{
    type: Array,
    // required: true
  },
  price:{
    type: Number,
    // required: true
  }
});

module.exports = ProductModel;
