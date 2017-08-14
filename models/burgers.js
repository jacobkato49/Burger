//require my created orm
const orm= require("../config/orm");

var burgers={
  all:function(cb){
    orm.all("burgers", function(res){
      cb(res);

      //check
      console.log(res);

      console.log(cb);
    });

  },

  create: function(col,val,cb){
    orm.create("burgers", col, val, function(res){
      cb(res);

      console.log(cb(res));

    })

  },

  update: function(objVal, condition, cb){
    orm.update("burgers", objVal, condition, function(res){
      cb(res);

      console.log(cb(res));
    });
  }
};


//export
module.exports = burgers;
