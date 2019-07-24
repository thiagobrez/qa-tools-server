import { connection } from 'mongoose';
import app from '../src/app';

const request = require('supertest');

afterAll(async () => {
  await connection.close();
});

const user = {
  email: 'thiago@email.com',
  firstName: 'Thiago',
  lastName: 'Brezinski',
};

it('creates user', async () => {
  const res = await request(app)
    .post('/users')
    .send(user);

  expect(res.status).toBe(200);
});

it('reads all users', async () => {
  const res = await request(app).get('/users');

  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining(user)]));
  expect(res.body[0]).toMatchSnapshot();
});
