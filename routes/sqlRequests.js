module.exports = function(app, sql) {

//Example POST Request with dummy database query
app.get('/db/sql/test', function(req, res) {
    sql.query("select 1", function(rows) {
        //everything good response
        res.json({ConnectionId: 0});
    })
});

}