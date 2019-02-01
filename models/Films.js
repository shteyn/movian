const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/***Creating a Schema***/
const FilmsSchema = new Schema({
  filmName: {
    type: String,
    required: true
  },
  filmYear: {
    type: Number,
    required: true
  },
  filmDescription: {
    type: String,
    required: true
  },
  filmGenre: {
    type: String,
    required: true
  },
  filmActor: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Films = mongoose.model("film", FilmsSchema); //--> creating a model that takes name 'film' (this is what you see in Mongo collection) and takes FilmsSchema to create a collection.
