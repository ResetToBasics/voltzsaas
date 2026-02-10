import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class UserRepositoryImpl implements UserRepository {
  async getUserById(id: string): Promise<User | null> {
    // This would typically call an API or a Database
    // For local dev, we return a mock
    return {
      id,
      name: 'John Doe',
      email: 'john@example.com',
      avatarUrl: 'https://i.pravatar.cc/150',
    };
  }

  async updateUser(user: User): Promise<void> {
    console.log('Updating user in DB:', user);
    return Promise.resolve();
  }
}
