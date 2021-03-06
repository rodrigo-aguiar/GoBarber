import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@example.test',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create two users with the same email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@example.test',
      password: '123456',
    });

    expect(createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@example.test',
      password: '123456',
    })).rejects.toBeInstanceOf(AppError);
  });
});
