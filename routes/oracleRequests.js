module.exports = function(app, oracle) {

//Example POST Request with dummy database query
app.get('/db/oracle/test', function(req, res) {
    oracle.query("SELECT SYS_CONTEXT('userenv', 'sid') AS session_id FROM DUAL", function(rows, response) {
        //everything good response
        res.json({ConnectionId: rows.rows[0][0]});
    });
})

};