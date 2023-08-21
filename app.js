import express from "express";
import database from "./db.js";

//init app & middleware
const app = express();

//db.connection
let db;

database.connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log(`app listening on port 3000`);
    });
    db = database.getDb();
  }
});

//routes
app.get("/books", (req, res) => {
  res.json({ msg: "welcome to the api" });
});
