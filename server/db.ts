import { eq, and, desc, asc, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  users,
  posts,
  memoryPosts,
  reactions,
  comments,
  follows,
  notifications,
  shares,
} from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = "admin";
      updateSet.role = "admin";
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db
    .select()
    .from(users)
    .where(eq(users.openId, openId))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function updateUserProfile(
  userId: number,
  updates: {
    name?: string;
    bio?: string;
    avatar?: string;
    coverPhoto?: string;
  }
) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .update(users)
    .set(updates)
    .where(eq(users.id, userId));

  return result;
}

// Posts
export async function createPost(
  userId: number,
  content: string,
  images?: string[]
) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.insert(posts).values({
    userId,
    content,
    images: images ? JSON.stringify(images) : null,
  });

  return result;
}

export async function getPostById(postId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(posts)
    .where(eq(posts.id, postId))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getFeedPosts(limit: number = 20, offset: number = 0) {
  const db = await getDb();
  if (!db) return [];

  const result = await db
    .select()
    .from(posts)
    .orderBy(desc(posts.createdAt))
    .limit(limit)
    .offset(offset);

  return result;
}

export async function getUserPosts(userId: number, limit: number = 20) {
  const db = await getDb();
  if (!db) return [];

  const result = await db
    .select()
    .from(posts)
    .where(eq(posts.userId, userId))
    .orderBy(desc(posts.createdAt))
    .limit(limit);

  return result;
}

export async function deletePost(postId: number) {
  const db = await getDb();
  if (!db) return undefined;

  return await db.delete(posts).where(eq(posts.id, postId));
}

// Memory Posts
export async function createMemoryPost(
  postId: number,
  memoryDate: Date,
  story: string,
  media?: string[]
) {
  const db = await getDb();
  if (!db) return undefined;

  return await db.insert(memoryPosts).values({
    postId,
    memoryDate,
    story,
    media: media ? JSON.stringify(media) : null,
  });
}

export async function getMemoryPostByPostId(postId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(memoryPosts)
    .where(eq(memoryPosts.postId, postId))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getUserMemories(userId: number, limit: number = 20) {
  const db = await getDb();
  if (!db) return [];

  const result = await db
    .select()
    .from(memoryPosts)
    .innerJoin(posts, eq(memoryPosts.postId, posts.id))
    .where(eq(posts.userId, userId))
    .orderBy(desc(memoryPosts.memoryDate))
    .limit(limit);

  return result;
}

// Reactions
export async function addReaction(
  userId: number,
  postId: number,
  type: "like" | "love" | "memory"
) {
  const db = await getDb();
  if (!db) return undefined;

  return await db.insert(reactions).values({
    userId,
    postId,
    type,
  });
}

export async function removeReaction(userId: number, postId: number) {
  const db = await getDb();
  if (!db) return undefined;

  return await db
    .delete(reactions)
    .where(and(eq(reactions.userId, userId), eq(reactions.postId, postId)));
}

export async function getPostReactions(postId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(reactions)
    .where(eq(reactions.postId, postId));
}

export async function getUserReactionOnPost(userId: number, postId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(reactions)
    .where(and(eq(reactions.userId, userId), eq(reactions.postId, postId)))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Comments
export async function addComment(
  userId: number,
  postId: number,
  content: string,
  parentCommentId?: number
) {
  const db = await getDb();
  if (!db) return undefined;

  return await db.insert(comments).values({
    userId,
    postId,
    content,
    parentCommentId,
  });
}

export async function getPostComments(postId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(comments)
    .where(eq(comments.postId, postId))
    .orderBy(asc(comments.createdAt));
}

export async function deleteComment(commentId: number) {
  const db = await getDb();
  if (!db) return undefined;

  return await db.delete(comments).where(eq(comments.id, commentId));
}

// Follows
export async function followUser(followerId: number, followingId: number) {
  const db = await getDb();
  if (!db) return undefined;

  return await db.insert(follows).values({
    followerId,
    followingId,
    status: "accepted",
  });
}

export async function unfollowUser(followerId: number, followingId: number) {
  const db = await getDb();
  if (!db) return undefined;

  return await db
    .delete(follows)
    .where(
      and(
        eq(follows.followerId, followerId),
        eq(follows.followingId, followingId)
      )
    );
}

export async function getFollowers(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(follows)
    .where(
      and(eq(follows.followingId, userId), eq(follows.status, "accepted"))
    );
}

export async function getFollowing(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(follows)
    .where(
      and(eq(follows.followerId, userId), eq(follows.status, "accepted"))
    );
}

export async function isFollowing(
  followerId: number,
  followingId: number
): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  const result = await db
    .select()
    .from(follows)
    .where(
      and(
        eq(follows.followerId, followerId),
        eq(follows.followingId, followingId),
        eq(follows.status, "accepted")
      )
    )
    .limit(1);

  return result.length > 0;
}

// Notifications
export async function createNotification(
  userId: number,
  actorId: number,
  type:
    | "like"
    | "comment"
    | "follow"
    | "memory_reminder"
    | "share",
  postId?: number,
  content?: string
) {
  const db = await getDb();
  if (!db) return undefined;

  return await db.insert(notifications).values({
    userId,
    actorId,
    type,
    postId,
    content,
  });
}

export async function getUserNotifications(
  userId: number,
  limit: number = 20,
  offset: number = 0
) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(notifications)
    .where(eq(notifications.userId, userId))
    .orderBy(desc(notifications.createdAt))
    .limit(limit)
    .offset(offset);
}

export async function markNotificationAsRead(notificationId: number) {
  const db = await getDb();
  if (!db) return undefined;

  return await db
    .update(notifications)
    .set({ read: true })
    .where(eq(notifications.id, notificationId));
}

export async function getUnreadNotificationCount(userId: number) {
  const db = await getDb();
  if (!db) return 0;

  const result = await db
    .select({ count: sql<number>`COUNT(*)` })
    .from(notifications)
    .where(
      and(
        eq(notifications.userId, userId),
        eq(notifications.read, false)
      )
    );

  return result[0]?.count || 0;
}

// Shares
export async function sharePost(userId: number, postId: number) {
  const db = await getDb();
  if (!db) return undefined;

  return await db.insert(shares).values({
    userId,
    postId,
  });
}

export async function getPostShares(postId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(shares)
    .where(eq(shares.postId, postId));
}

// Search
export async function searchUsers(query: string, limit: number = 10) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(users)
    .where(
      sql`CONCAT(${users.name}, ' ', ${users.email}) LIKE ${`%${query}%`}`
    )
    .limit(limit);
}
