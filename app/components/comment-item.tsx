import { useState } from 'react';
import { Comment, User } from '../types';

interface CommentItemProps {
  comment: Comment;
  user: User;
  currentUser: User;
  editComment: (comment: Comment) => void;
}

export function CommentItem({ comment, user, currentUser, editComment }: CommentItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleCommentEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      editComment({ ...comment, content: e.currentTarget.value });
    }
  };

  const isEditable = currentUser.id === comment.userId;

  return (
    <div className="bg-white p-4 flex items-center justify-between">
      <div>
        <span className="font-semibold mr-2">{user.name}</span>
        {isEditing ? (
          <input defaultValue={comment.content} onKeyDown={handleCommentEdit} className="bg-zinc-300 border" />
        ) : (
          <span>{comment.content}</span>
        )}
      </div>
      {isEditable && (
        <button className="cursor-pointer" onClick={() => setIsEditing(true)}>
          <span className="text-sm">Edit</span>
        </button>
      )}
    </div>
  );
}
