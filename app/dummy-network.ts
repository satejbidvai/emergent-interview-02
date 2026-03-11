import { Comment } from './types';

/**
 * {
 * comments: [comment1, comment2, ...]
 *
 * }
 *
 *
 */

export const STORAGE_KEY = 'COMMENTS_STORE';

export function submitComment(
  comment: Comment
  //   TODO: Add nested comments
  //   options: {
  //     parentId: string;
  //   }
) {
  try {
    const comments = fetchComments() ?? [];
    comments.push(comment);

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ comments }));
  } catch {}
}

export function fetchComments() {
  try {
    const storageBlob = localStorage.getItem(STORAGE_KEY);
    let comments: Array<Comment> = [];
    if (storageBlob) {
      const storage = JSON.parse(storageBlob) as { comments: Array<Comment> };
      comments = storage.comments;
    }

    return comments;
  } catch {
    return [];
  }
}
