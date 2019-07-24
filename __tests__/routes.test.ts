import { connection } from 'mongoose';
import app from '../src/app';

const request = require('supertest');

afterAll(async () => {
  await connection.close();
});

it('reads all users', async () => {
  const res = await request(app).get('/users');
  const thiago = {
    _id: '5d38aa3ec832580ef81c3ed7',
    email: 'thiago@email.com',
    firstName: 'Thiago',
    lastName: 'Brezinski',
    createdAt: '2019-07-24T18:58:06.350Z',
    updatedAt: '2019-07-24T18:58:06.350Z',
    __v: 0,
  };

  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
  expect(res.body).toContainEqual(thiago);
  expect(res.body).toMatchSnapshot();
});
