'use client';

import { useEffect, useState } from 'react';
import { User } from '../../domain/entities/User';
import { UserRepositoryImpl } from '../../infrastructure/repositories/UserRepositoryImpl';
import { GetUserProfile } from '../../domain/use-cases/GetUserProfile';

export const useUser = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRepository = new UserRepositoryImpl();
        const getUserProfile = new GetUserProfile(userRepository);
        const data = await getUserProfile.execute(userId);
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};
