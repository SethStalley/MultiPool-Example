var mysql = require('mysql');

//Localhost config
var pool = mysql.createPool({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '1234',
  connectionLimit : 100,
  debug    :  false
});


//Test our connection
pool.getConnection(function(err, connection) {
    if(!err)
        console.log("MySQL connection was succesful.")
    else
        console.log("ERROR on MySQL connection: " + err) 
    connection.release();
});


/*
    Wrapper which allows easy calling of the database from anywhere that references this file.
    If any error results from the query or connection a json response of the error will be
    returned instead.
    
    Example:
        query('select * from test', function(rows) {
            // 'rows' will now contain all returned rows.
        });     
*/
module.exports = {
  query : function(queryString, result){
    pool.getConnection(function(error,connection){
        if(error) {
            return result(error);
        }else{
            console.log('Mysql connected as id ' + connection.threadId);
            connection.query(queryString ,function(error,rows){
                connection.release();  //give connection back to the pool
                if(error){
                    return result(error, connection.threadId);
                }else {
                    return result(rows, connection.threadId);
                }
            });
        }
    });
  }
};