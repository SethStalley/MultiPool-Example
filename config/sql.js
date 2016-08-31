var sql = require('mssql');

var config = {
    user: 'admin',
    password: '123456',
    server: 'localhost',
    database: 'pool_test',
    pool: {
        max: 25,
        min: 10,
        idleTimeoutMillis: 30000
    }
}

var pool = new sql.Connection(config);
pool.connect();
console.log("SQL Pool is Open");

module.exports = {
  query : function(queryString, result){

        var request = new sql.Request(pool);
        request.query(queryString, function(err,recordset) {
            console.log('SQL connected as id ' + recordset[0].session_id)
            return result(recordset);
        });
 
  }
};
