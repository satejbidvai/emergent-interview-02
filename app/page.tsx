'use client';

import Image from 'next/image';
import { CommentInput } from './components/comment-input';
import { CommentsList } from './components/comments-list';
import { fetchComments, STORAGE_KEY } from './dummy-network';
import { useEffect, useState } from 'react';
import { Comment, User } from './types';
import { users } from './dummy-data/current-user';
import { log } from 'console';
import { UserSwitcher } from './components/user-switcher';

export default function Home() {
  const [currentUser, setCurrentUser] = useState<User>(users[0]);
  const [comments, setComments] = useState<Array<Comment>>([]);

  useEffect(() => {
    const initialComments = fetchComments();
    setComments(initialComments);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ comments }));
  }, [comments]);

  const submitComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  const editComment = (comment: Comment) => {
    setComments(comments.map((c) => (c.id === comment.id ? comment : c)));
  };

  const getUserFromId = (id: string) => {
    return users.find((u) => u.id === id) ?? users[0];
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans pt-20 text-black">
      <div className="flex flex-col gap-y-4">
        <UserSwitcher currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <CommentInput submitComment={submitComment} currentUser={currentUser} />
        <CommentsList
          comments={comments}
          getUserFromId={getUserFromId}
          currentUser={currentUser}
          editComment={editComment}
        />
      </div>
    </div>
  );
}
