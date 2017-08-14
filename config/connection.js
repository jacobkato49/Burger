var mysql = require("mysql");

var connection;

//create a connection to the JAWSDB_URL
if(process.env.JAWSDB_URL){
  connection.mysql.createConnection(process.env.JAWSDB_URL);
  //local to mysql
}else{
  connection = mysql.createConnection({
    root:3000,
    host:"localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connection.connect(function(err){
  //tell me if an error occurs
  if(err){
    console.log("Error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadID);

});

module.exports = connection;
