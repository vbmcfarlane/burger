// Import the ORM to create functions that will interact with the database.

var connection = require('../config/connection.js');

// function printQuestionMarks(num){
//   var arr = [];

//   for (var i=0; i<num; i++){
//     arr.push('?')
//   };

//   return arr.toString();
// };

// function objToSql(ob){
//   //column1=value, column2=value2,...
//   var arr = [];

//   for (var key in ob) {
//     arr.push(key + '=' + ob[key]);
//   };

//   return arr.toString();
// };

var orm = {
  selectAll: function(tableInput, cb){
    var queryString = 'SELECT * FROM ' + tableInput;

    connection.query(queryString, function(err, result){
      if(err) throw err;
      cb(result);
    });
  },
  create: function(tableInput, col, vals, cb){
    var queryString = 'INSERT INTO ' + tableInput;
    queryString +=  ' (';
    queryString += col.toString(); 
    queryString += ') ';
    queryString +='VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    connection.query(queryString, vals, function(err, result){
      if(err) throw err;
      cb(result);
    });
  },
  update: function(tableInput, objColVals, condition, cb){
    var queryString = 'UPDATE ' + tableInput;
    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result){
      if(err) throw err;
      cb(result);
    });
  }
};

module.exports=orm;