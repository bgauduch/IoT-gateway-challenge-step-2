var express = require('express')
var influx = require('influx')
var router = express.Router()

// conf influxdb
/*client = influx({
  host: 'influxdb'
 })*/
var dbSensors = new influx.InfluxDB({
	host: 'influxdb',
	port: '8086',
	user: 'iot',
	password: 'pswd',
	database: 'sensordb'
})

// POST sensors messages
router.post('/messages', function (req, res, next) {

	// TODO : input data validation

  dbSensors.writePoint(
  	//  name
  	'sensors',
  	// values
  	{time: Date.parse(req.body.timestamp), value: req.body.value},
  	// tags
  	{id: req.body.id, sensorType: req.body.sensorType.toString()},
  	// handle write result
  	function(err, response) {
  		if (err) {
  			console.error(err)
  			next(err)
  		} else {
  			res.end()
  		}
  	})
})

// export message routes
module.exports = router
