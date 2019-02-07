const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/***Creating a Schema***/
const FilmsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  actor: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Films = mongoose.model("film", FilmsSchema); //--> creating a model that takes name 'film' (this is what you see in Mongo collection) and takes FilmsSchema to create a collection.
