import { Router } from 'express';

import appointsmentRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointsmentRouter);
routes.use('/users', usersRouter);

export default routes;
