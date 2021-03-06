var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  review : {
    type : String,
    required : true
  },
  createOn : {
    type : Date,
    "default" : Date.now}
});

var zoo = new mongoose.Schema({
  name : String,
  username : { type: String, unique: true },
  password : { type: String },
  email : {  type : String },
  description: String,
  country : String,
  city : String,
  category : String,
  openingYear : Number,
  numberAnimals : Number,
  picture : String,
  reviews : [reviewSchema],
  createOn : {
    type : Date,
    "default" : Date.now
  },
  modifyOn : {
    type : Date,
    "default" : Date.now
  },

  });

  mongoose.model('zoo', zoo, "zoos");
