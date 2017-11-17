"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connects to the Mongo DB and console.log then throw the error if occurs

MongoClient.connect(MONGODB_URI, (err, db) => {
    if(err){
      console.log(`Failed to connect: ${MONGODB_URI}`);
      throw err;
    }

  // Data-Helpers file for the functions used in the client to display and post tweets to the DB.
  const DataHelpers = require("./lib/data-helpers.js")(db);

  //Routing for the tweets
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});