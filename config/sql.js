var sql = require('mssql');

var config = {
    user: 'admin',
    password: '123456',
    server: 'localhost',
    database: 'pool_test',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

var pool = new sql.Connection(config);
pool.connect();
console.log("SQL Pool is Open");

module.exports = {
  query : function(queryString, result){
    //initiate pool
    
        var request = new sql.Request(pool);
        request.query(queryString).then(function(result) {
            return result;
        }).catch(function(err) {
            console.log(err);
        });
    
 
  }
};