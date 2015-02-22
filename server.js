var express = require('express');
var mysql = require('mysql');
var app = express();
app.use(express.static(__dirname + '/public'));


app.get('/points', function (req, res) {
	//Connect
	var connection = mysql.createConnection({
	  host     : 'dev.codementum.org',
	  database : 'firefinder',
	  user     : 'wpi',
	  password : 'wpiwpi'
	});

	connection.connect();
	//just using the give ranges
	var minTemp = req.query.minTemp == undefined ? '2.2' : req.query.minTemp;
	var maxTemp = req.query.maxTemp == undefined ? '33.0' : req.query.maxTemp;
	var minHumidity = req.query.minHumidity == undefined ? '15' : req.query.minHumidity;
	var maxHumidity = req.query.maxHumidity == undefined ? '100' : req.query.maxHumidity;
	var minWind = req.query.minWind == undefined ? '0.4' : req.query.minWind;
	var maxWind = req.query.maxWind == undefined ? '9.4' : req.query.maxWind;

	var query = "select * from FORESTFIRE" + 
	" where Temp between " + minTemp + " and " + maxTemp +
	" and Humidity between " + minHumidity + " and " + maxHumidity + 
	" and Wind between " + minWind + " and " + maxWind; // Example sql = "select * from " + table_name + " where Temp > " + minTemp;

	console.log(query);

	connection.query(query, function(err, rows, fields) {
		if (err) throw err;
		res.send(rows);
	});
	connection.end();
})


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})