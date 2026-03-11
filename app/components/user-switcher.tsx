import { useState } from 'react';
import { User } from '../types';
import { users } from '../dummy-data/current-user';

interface UserSwitcherProps {
  currentUser: User;
  setCurrentUser: (user: User) => void;
}

export function UserSwitcher({ currentUser, setCurrentUser }: UserSwitcherProps) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-2">
        {users.map((user) => (
          <button key={user.id} onClick={() => setCurrentUser(user)} className="bg-amber-400 px-4 py-2">
            {user.name}
          </button>
        ))}
      </div>
      Current User: {currentUser.name}
    </div>
  );
}
