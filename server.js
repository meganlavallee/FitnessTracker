var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Server Listening on http://localhost:8080

var PORT = process.env.PORT || 8080;

var app = mongoose();

// Serve static content for the app from the "public" directory in the application directory.
app.use(mongoose.static("public"));

// Parse application body
app.use(mongoose.urlencoded({ extended: true }));
app.use(mongoose.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
