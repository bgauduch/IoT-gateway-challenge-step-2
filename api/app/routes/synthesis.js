var express = require('express')
var influx = require('influx')
var router = express.Router()

// influxdb sensors db
var dbSensors = influx({
	host: '192.168.99.101',
	port: '8086',
	user: 'iot',
	password: 'pswd',
	database: 'sensordb'
})

// GET sensors synthesis
router.get('/messages/synthesis', function (req, res, next ){

	// check synthesis calculation parameters
	if (!req.query.timestamp || !req.query.duration || !Date.parse(req.query.timestamp)) {
		console.error("wrong request query parameters")
		console.error(req.query.timestamp)
		console.error(req.query.duration)
		next("query parameters [timestamp : date-time RFC3339] and [duration : int32] are required for [GET]/messages/synthesis entrypoint")
	} else {
		// create start and stop timestamps from parameter (conversion from milliseconds to nanoseconds)
		var startTs = req.query.timestamp
		var duration = req.query.duration

		// build queries : mean, minimum and max values for each sensorType
			var queries = 'SELECT MEAN(value) FROM sensors WHERE TIME >= \'' + startTs + '\' AND TIME <= \'' + startTs + '\' + ' + duration + 's GROUP BY sensorType;'
			+ 'SELECT MIN(value) FROM sensors WHERE TIME >= \'' + startTs + '\' AND TIME <= \'' + startTs + '\' + ' + duration + 's GROUP BY sensorType;'
			+ 'SELECT MAX(value) FROM sensors WHERE TIME >= \'' + startTs + '\' AND TIME <= \'' + startTs + '\' + ' + duration + 's GROUP BY sensorType'

		// query database
		dbSensors.query(queries, function (err, results) {
			if(err) {
				console.error(err)
				next(err)
			} else {
				var synthesisList = [];
				for(var i = 0; i < results[0].length; i++) {
					if (results[0][i].mean) {
						// synthesis for the current sensorType
						var synthesis = {
							sensorType: results[0][i].sensorType,
							minValue: results[1][i].min,
							maxValue: results[2][i].max,
							mediumValue:results[0][i].mean
						}
						synthesisList.push(synthesis)
					}
				}

				// send synthesis list
				res.json(synthesisList)
			}
		});
	}
})

// export synthesis routes
module.exports = router
