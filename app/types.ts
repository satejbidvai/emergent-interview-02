export interface User {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  userId: string;
  timestamp: Date;
  content: string;
  replies: Array<Comment>;
}
