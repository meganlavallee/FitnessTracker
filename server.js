const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const app = express()
var myLogger = function (req, res, next) {
  console.log("logged")
  next()
}
app.use(myLogger)
app.get('/', function (req, res){
  res.send("sent")
})

app.listen(8080)

// const PORT = process.env.PORT || 8080;

// const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
 });

 require('./routes/api-routes.js')(app);
 require('./routes/html-routes.js')(app);
 require('./seeders/seed.js');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// const routes = require("./seeders/seed.js");

// app.use(routes);

// app.listen(PORT, function() {
//   console.log("Server listening on: http://localhost:" + PORT);
// });
