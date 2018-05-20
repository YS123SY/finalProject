const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongo_url = "mongodb://localhost:27017";
const database = "articles";

MongoClient.connect(mongo_url, (err, client) => {
  assert.equal(null, err, "data-base error");

  const db = client.db(database);

  app.post("/post", (req, res) => {
    let new_articles = req.body;
    db.collection("arc").insertOne({ ...new_articles }, (err, data) => {
      if (err) {
        res.send("cant add the new article");
      } else {
        res.send("article added ");
      }
    });
  });
  app.get("/", (req, res) => {
    db
      .collection("arc")
      .find()
      .toArray((err, data) => {
        res.send("ffffffffffff");
      });
  });
});

app.listen(3001, err => {
  if (err) {
    console.log("server is dead");
  } else {
    console.log("server is 3ayech");
  }
});
