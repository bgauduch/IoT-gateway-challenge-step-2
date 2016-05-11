// message API test
describe('Messages', function () {
  describe('POST', function () {
    // testing message value insert
    it('should respond with HTTP status code 200 on message insertion', function (done) {
      var message = {'id': 'abcd1234', 'timestamp': new Date().toISOString(), 'sensorType': 1, 'value': 1}
      request(app)
        .post('/messages')
        .send(message)
        .expect(200, done)
    })
  })
})
