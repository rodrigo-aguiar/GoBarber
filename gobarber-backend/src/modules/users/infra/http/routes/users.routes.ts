import { Router } from 'express';
import multer from 'multer';

import uploadCOnfig from '@config/upload';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadCOnfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUserService = new CreateUserService();

  const { id, created_at, updated_at } = await createUserService.execute({
    name,
    email,
    password,
  });

  return response.status(201).json({ id, name, email, created_at, updated_at });
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatarService = new UpdateUserAvatarService();

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
  },
);

export default usersRouter;