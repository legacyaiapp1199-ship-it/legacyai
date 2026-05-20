export interface Post {
  id: number;
  userId: number;
  content: string;
  images: string | null | unknown;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemoryPost {
  id: number;
  postId: number;
  memoryDate: Date;
  story: string;
  media: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  openId: string;
  name: string | null;
  email: string | null;
  avatar: string | null;
  bio: string | null;
  coverPhoto: string | null;
  loginMethod: string | null;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
  lastSignedIn: Date;
}

export interface Reaction {
  id: number;
  userId: number;
  postId: number;
  type: "like" | "love" | "memory";
  createdAt: Date;
}

export interface Comment {
  id: number;
  userId: number;
  postId: number;
  parentCommentId: number | null;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Follow {
  id: number;
  followerId: number;
  followingId: number;
  status: "pending" | "accepted";
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: number;
  userId: number;
  actorId: number;
  type: "like" | "comment" | "follow" | "memory_reminder" | "share";
  postId: number | null;
  content: string | null;
  read: boolean;
  createdAt: Date;
}
