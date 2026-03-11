import { Comment, User } from '../types';
import { CommentItem } from './comment-item';

interface CommentsListProps {
  comments: Array<Comment>;
  getUserFromId: (id: string) => User;
  currentUser: User;
  editComment: (comment: Comment) => void;
}

export function CommentsList({ comments, getUserFromId, currentUser, editComment }: CommentsListProps) {
  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => (
        <CommentItem
          comment={comment}
          user={getUserFromId(comment.userId)}
          key={comment.id}
          currentUser={currentUser}
          editComment={editComment}
        />
      ))}
    </div>
  );
}
