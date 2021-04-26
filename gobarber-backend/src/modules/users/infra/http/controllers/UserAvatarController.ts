import { Request, Response } from "express";
import { container } from 'tsyringe';

import UpdateUserAvatarService from "@modules/users/services/UpdateUserAvatarService";

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);

    const {
      id,
      name,
      email,
      avatar,
      created_at,
      updated_at,
    } = await updateUserAvatarService.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    return response.json({ id, name, email, avatar, created_at, updated_at });
  }
}
