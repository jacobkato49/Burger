//create a connection to connection.js
var connection= require("../config/connection");

function questionMarks (num){
  //open array
  var array=[];

  for(var i=0; i<num; i++){
    array.push("?")
  }

  //put the array in a string
  return array.toString();

}


//putting an object within sql
function objSql(object) {

  //empty array
  var array =[];

  for(var key in object){
    array.push(key + "=" + object[key]);
  }

  //put the array in a string
  return array.toString();
}

//orm time
const orm={

  all: function(tableInput, cb){
    var queryString = "SELECT * FROM " + tableInput;

    connection.query(queryString, function(err,res){
      if(err) throw err;
      cb(res);
    })
  },

  //create
  create: function(table,col,val,cb){
    var queryString = "INSERT INTO "  + table;

    queryString= queryString + " (";
    queryString = queryString + col.toString();
    queryString= queryString + ") ";
    queryString = queryString + "VALUES (";
    queryString = queryString + questionMarks(val.length);
    queryString = queryString + ") ";


    connection.query(queryString, val, function(err,res){
      if(err) throw err;
      cb(res);
    })
  },

  //update
  update: function(table, objVal, cond, cb){
    var queryString = "UPDATE " + table;

    queryString = queryString + " SET ";
    queryString = queryString + objSql(objVal);
    queryString = queryString + " WHERE ";
    queryString = queryString + cond;

    //check
    console.log(queryString);

    connection.query(queryString, function(err,res){
      if(err) throw err;
      cb(res);
    })
  }

}
//export the orm object
module.exports = orm;
