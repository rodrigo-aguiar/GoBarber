import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUserService = new AuthenticateUserService();

  const { user, token } = await authenticateUserService.execute({
    email,
    password,
  });

  const { id, name, created_at, updated_at } = user;

  return response.json({
    user: { id, name, email, created_at, updated_at },
    token,
  });
});

export default sessionsRouter;
