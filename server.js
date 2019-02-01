const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const films = require("./routes/api/films"); //--> imports Routes file

/***Init App***/
const app = express();

app.use(bodyParser.json()); //--> Handles parsing JSON content

/***DB config***/
const db = require("./config/key").mongoURI;

mongoose //-->Connect to MongoDB
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongo is connected"))
  .catch(error => console.log("connection Error to Mongo", error));

/***Use Routes File***/
//@Films Route
app.use("/api/films", films); // --> Any request that goes to api/films/* goes to the ./routes/api/films

/***Port initialization***/
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`)); //--> Starting the Server
