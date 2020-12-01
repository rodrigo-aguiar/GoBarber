import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';

import uploadCOnfig from './config/upload';

import routes from './routes';

import './database';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadCOnfig.directory));
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
