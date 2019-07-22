const request = require('supertest');
const app = require('../app');

it('reads all users', async () => {
  const res = await request(app).get('/users');

  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body.length).toEqual(2);
});