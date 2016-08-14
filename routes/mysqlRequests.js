module.exports = function(app, mysql) {

//Example POST Request with dummy database query
app.get('/db/mysql/test', function(req, res) {
    mysql.query("select 1", function(rows, connectionId) {
        //everything good response
        res.json({ConnectionId: connectionId});
    })
});

}