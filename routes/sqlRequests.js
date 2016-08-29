module.exports = function(app, sql) {

//Example POST Request with dummy database query
app.get('/db/sql/test', function(req, res) {
    sql.query('select * from sys.dm_exec_connections ' + 
              'where session_id = @@SPID', function(rows) {
        //everything good response
        res.json({ConnectionId: rows[0]});
    })
});

}