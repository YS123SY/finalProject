const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongo_url = "mongodb://localhost:27017";
const database = "articles"; //contact

MongoClient.connect(mongo_url, (err, client) => {
  assert.equal(null, err, "data-base error");

  const db = article.db(database); //client

  app.post("/", (req, res) => {
    let new_article = req.body;
    db.collection("arc").insertOne({ ...new_article }, (err, data) => {
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
        res.send(data);
      });
  });

  app.get("/:id", (req, res) => {
    const id = ObjectID(req.params.id);
    db.collection("arc").findOne({ _id: id }, (err, data) => {
      if (err) {
        res.send("cant get the requested article");
      } else {
        res.send(data);
      }
    });
  });

  app.delete("/:id", (req, res) => {
    const id = ObjectID(req.params.id);
    db.collection("arc").findOneAndDelete({ _id: id }, (err, data) => {
      if (err) {
        res.send("cant delete the requested article");
      } else {
        res.send("article removed");
      }
    });
  });

  app.put("/:id", (req, res) => {
    const id = ObjectID(req.params.id);
    const updateInfo = req.body;
    db
      .collection("arc")
      .findOneAndUpdate(
        { _id: id },
        { $set: { ...updateInfo } },
        (err, data) => {
          if (err) {
            res.send("cant updated the requested article");
          } else {
            res.send("article updated");
          }
        }
      );
  });
});

app.listen(3001, err => {
  if (err) {
    console.log("server is dead");
  } else {
    console.log("server is 3ayech");
  }
});
