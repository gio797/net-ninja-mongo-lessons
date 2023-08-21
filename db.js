const { MongoClient } = require("mongodb");

let dbConnection;
let uri = `mongodb+srv://giomuchaidze:giorgim123@cluster0.08l2kuy.mongodb.net/?retryWrites=true&w=majority`;

module.exports = {
  connectToDb: (cb) => {
    // MongoClient.connect('mongodb://localhost:27017/bookstore') not worked
    //MongoClient.connect("mongodb://127.0.0.1/bookstore")

    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
