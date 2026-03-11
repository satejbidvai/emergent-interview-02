import { User } from '../types';

export const user1: User = {
  id: '123',
  name: 'Alice'
};

export const user2: User = {
  id: '234',
  name: 'Bob'
};

export const users = [user1, user2] as const satisfies Array<User>;
