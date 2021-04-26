import { Request, Response } from "express";
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });

    const { id, name, created_at, updated_at } = user;

    return response.json({
      user: { id, name, email, created_at, updated_at },
      token,
    });
  }
}
