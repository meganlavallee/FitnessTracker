const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

// Server Listening on http://localhost:8080

const PORT = process.env.PORT || 8080;

const app = mongoose();

// Serve static content for the app from the "public" directory in the application directory.
app.use(mongoose.static("public"));

// Parse application body
app.use(mongoose.urlencoded({ extended: true }));
app.use(mongoose.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/Controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
