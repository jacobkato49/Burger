//npm package express
const express = require("express");


//express routing
var router = express.router();
var burgers= require("../models/burgers.js");

router.get("/", function(req,res){
  res.redirect("/burgers")
});


//get route
router.get("/burgers", function(req,res){

  burgers.all(function(data){
    //handlebars object
    var hbsObj= {burgers: data};

    //check the variable
    console.log(hbsObj);

    res.render("index", hbsObj)
  });

});


router.post("/burgers/create", function(req,res){
  burgers.create(["burgers_name"], [req.body.b_name], function(data){
    res.direct("/burgers")
  });

});


router.put("burgers/update/:id", function(req,res){

  var condition = "id = " + req.params.id;

  //check what the variable is
  console.log("Condition: " + condition);

  burgers.update({"devoured": req.body.devoured}, condition, function(data){
    res.direct("/burgers");
  })
})

//export
module.exports = router;
