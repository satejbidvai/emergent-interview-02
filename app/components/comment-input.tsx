import { useState } from 'react';
import { submitComment } from '../dummy-network';
import { Comment, User } from '../types';

interface CommentInputProps {
  currentUser: User;
  submitComment: (comment: Comment) => void;
}

export function CommentInput({ submitComment, currentUser }: CommentInputProps) {
  const [text, setText] = useState('');

  const handleSubmitComment = () => {
    const newComment: Comment = {
      id: new Date().toLocaleString(),
      content: text,
      replies: [],
      timestamp: new Date(),
      userId: currentUser.id
    };

    submitComment(newComment);
    setText('');
  };

  return (
    <div className="flex gap-x-2">
      Comment Box:
      <input value={text} onChange={(e) => setText(e.target.value)} className="text-black text-xl bg-zinc-300" />
      <button onClick={handleSubmitComment}>Submit</button>
    </div>
  );
}
