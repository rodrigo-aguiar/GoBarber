import { Router } from 'express';

import appointsmentRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './session.routes';

const routes = Router();

routes.use('/appointments', appointsmentRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
