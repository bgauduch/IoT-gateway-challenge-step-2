var express = require('express')
var router = express.Router()

// POST sensors messages
router.post('/messages', function (req, res, next) {
  // create the message document from request & convert date to millisecond for storage
  var sensorMessage = {
    id: req.body.id,
    timestamp: Date.parse(req.body.timestamp),
    sensorType: req.body.sensorType,
    value: req.body.value
  }

  res.json(sensorMessage)
})

// export message routes
module.exports = router
