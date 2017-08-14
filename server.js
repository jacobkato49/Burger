//npm packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app= express();

//middleware
app.use(express.static(process.cwd()+"/public")); /*Serve static content for the app from the "public" directory in the application directory*/

/*returns middleware that only parses urlencoded bodies**/
app.use(bodyParser.urlencoded({
  extended: false /*parse extended syntax with the qs module*/
}))

//override with POST method
app.use(methodOverride("_method"))
var exphbs = require("express-handlebars");

//find documentation
app.engine("handlebars", exphbs({
  defaultLayout: "main",
}));

app.set("view engine", "handlebars");

//route to the burger controller
var routes = require("./controllers/burger_controller.js"); /*POST,PUT,GET*/
app.use("/", routes);

var port = process.env.PORT || 3000;
app.listen(port);
