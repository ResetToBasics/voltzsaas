import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class GetUserProfile {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
