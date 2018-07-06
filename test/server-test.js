const expect = require('expect');
const request = require('supertest');

var app = require('./server').app;
describe('POST USER TEST',() => {
    it('Post /user',(done) => {
        var tex = "asdasd";
   
    request(app).post('/users').send({tex}).expect()
});
});
