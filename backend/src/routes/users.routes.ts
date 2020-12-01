import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService();

    const { id, created_at, updated_at } = await createUserService.execute({
      name,
      email,
      password,
    });

    return response
      .status(201)
      .json({ id, name, email, created_at, updated_at });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
