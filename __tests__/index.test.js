const request = require('supertest');
const app = require('../app');

it('reads all users', async () => {
  const res = await request(app).get('/');

  expect(res.status).toBe(200);
  expect(res.text).toMatchSnapshot();
});