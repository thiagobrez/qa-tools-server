import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    connect(
      'mongodb://localhost:27017/qa-tools',
      { useNewUrlParser: true },
    );
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
