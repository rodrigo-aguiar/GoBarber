import { Request, Response } from "express";
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const { id, created_at, updated_at } = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.status(201).json({ id, name, email, created_at, updated_at });
  }
}
