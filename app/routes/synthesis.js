var express = require('express')
var router = express.Router()

// GET sensors synthesis
router.get('/messages/synthesis', function (req, res, next) {
  res.send('synthesis')
})

// export synthesis routes
module.exports = router
