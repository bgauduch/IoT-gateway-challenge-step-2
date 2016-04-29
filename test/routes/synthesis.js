// Synthesis API test
describe('Synthesis', function () {
  describe('GET at /messages/synthesis', function () {
    it('should respond with HTTP status code 200', function (done) {
      request(app)
        .get('/messages/synthesis')
        .set('Accept', 'application/json')
        .expect(200, done)
    })
  })
})
