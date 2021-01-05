// Mongoose Connection
const Mongoose = require("Mongoose");

// Connections
if (process.env.JAWSDB_URL) {
    connection = Mongoose.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = Mongoose.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "burger_db",
    });
    console.log("Connected")
  }
  
  
  // Make connection.
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("Connected" + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;