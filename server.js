const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const films = require("./routes/api/films"); //--> imports Routes file, and we are using it in /api/films.js(api)

/***Init App***/
const app = express();

app.use(bodyParser.json()); //--> Handles parsing JSON content

/***DB config***/
const db = require("./config/key").mongoURI;

mongoose //-->Connect to MongoDB
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongo is connected"))
  .catch(error => console.log("connection Error to Mongo", error));

/***Use Routes File***/
//@Films Route
app.use("/api/films", films); // --> Any request that goes to api/films/* goes to the ./routes/api/films

//Serve static assets if we in prod
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
/***Port initialization***/
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`)); //--> Starting the Server
