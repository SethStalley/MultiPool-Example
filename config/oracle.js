var oracle = require("oracledb");
var pool;

var config = {
    user:             'SYSTEM',
    password:         'Oracle123',
    connectString:    '',
    poolMax:          40,
    poolMin:          10,
    poolIncrement:    5,
    poolTimeout:      4
};


oracle.createPool(config , function(err, p) {

    if (err) {
      console.log("ERROR: ", new Date(), ": createPool() callback: " + err.message);
      return;
    }

    pool = p;

    //require('../libs/oracledb.js')(pool);
    console.log('OracleDb Pool created')
});



module.exports = {
  query : function(queryString, result){

        pool.getConnection(function (err, con){
            if(err){
                console.log(err);
            }else {
                con.execute(queryString, function(err, res) {
                    //give connection back to pool
                    con.release(
                        function(err) {
                        if (err) {
                            console.error(err.message);
                        }
                    });

                    if(err) {
                        return result(err)
                    }else{ 
                        console.log('Oracle connected as id '+ res.rows[0][0] );
                        return result(res)
                    }
                });
            }
            });
        }
};




