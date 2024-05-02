const request = require('supertest');
const app = require('../index');

describe('Users API v1', function() {
    var token = process.env.TOKEN;

    it('Memunculkan semua data users', async() => {
        request(app)
        .get('/v1/users')
        .set('Authorization', token)
        .expect(200, done);
    });
});