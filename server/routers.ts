import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import {
  createPost,
  getPostById,
  getFeedPosts,
  getUserPosts,
  deletePost,
  createMemoryPost,
  getMemoryPostByPostId,
  getUserMemories,
  addReaction,
  removeReaction,
  getPostReactions,
  getUserReactionOnPost,
  addComment,
  getPostComments,
  deleteComment,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
  isFollowing,
  createNotification,
  getUserNotifications,
  markNotificationAsRead,
  getUnreadNotificationCount,
  sharePost,
  getPostShares,
  searchUsers,
  getUserById,
  updateUserProfile,
} from "./db";
import { storagePut } from "./storage";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // User routes
  user: router({
    getProfile: protectedProcedure
      .input(z.object({ userId: z.number() }))
      .query(async ({ input }) => {
        return await getUserById(input.userId);
      }),

    updateProfile: protectedProcedure
      .input(
        z.object({
          name: z.string().optional(),
          bio: z.string().optional(),
          avatar: z.string().optional(),
          coverPhoto: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        return await updateUserProfile(ctx.user.id, input);
      }),

    uploadAvatar: protectedProcedure
      .input(z.object({ fileBuffer: z.instanceof(Buffer) }))
      .mutation(async ({ ctx, input }) => {
        const { url } = await storagePut(
          `avatars/${ctx.user.id}-${Date.now()}.jpg`,
          input.fileBuffer,
          "image/jpeg"
        );
        await updateUserProfile(ctx.user.id, { avatar: url });
        return { url };
      }),

    uploadCoverPhoto: protectedProcedure
      .input(z.object({ fileBuffer: z.instanceof(Buffer) }))
      .mutation(async ({ ctx, input }) => {
        const { url } = await storagePut(
          `covers/${ctx.user.id}-${Date.now()}.jpg`,
          input.fileBuffer,
          "image/jpeg"
        );
        await updateUserProfile(ctx.user.id, { coverPhoto: url });
        return { url };
      }),

    search: publicProcedure
      .input(z.object({ query: z.string(), limit: z.number().default(10) }))
      .query(async ({ input }) => {
        return await searchUsers(input.query, input.limit);
      }),
  }),

  // Post routes
  post: router({
    create: protectedProcedure
      .input(
        z.object({
          content: z.string().min(1),
          images: z.array(z.string()).optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        return await createPost(ctx.user.id, input.content, input.images);
      }),

    getById: publicProcedure
      .input(z.object({ postId: z.number() }))
      .query(async ({ input }) => {
        return await getPostById(input.postId);
      }),

    getFeed: publicProcedure
      .input(
        z.object({
          limit: z.number().default(20),
          offset: z.number().default(0),
        })
      )
      .query(async ({ input }) => {
        return await getFeedPosts(input.limit, input.offset);
      }),

    getUserPosts: publicProcedure
      .input(z.object({ userId: z.number(), limit: z.number().default(20) }))
      .query(async ({ input }) => {
        return await getUserPosts(input.userId, input.limit);
      }),

    delete: protectedProcedure
      .input(z.object({ postId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const post = await getPostById(input.postId);
        if (post?.userId !== ctx.user.id) {
          throw new Error("Unauthorized");
        }
        return await deletePost(input.postId);
      }),
  }),

  // Memory post routes
  memory: router({
    create: protectedProcedure
      .input(
        z.object({
          content: z.string().min(1),
          memoryDate: z.date(),
          story: z.string().min(1),
          images: z.array(z.string()).optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const post = await createPost(ctx.user.id, input.content, input.images);
        if (!post) throw new Error("Failed to create post");

        const postId = (post as any).insertId;
        await createMemoryPost(
          postId,
          input.memoryDate,
          input.story,
          input.images
        );

        return { postId };
      }),

    getByPostId: publicProcedure
      .input(z.object({ postId: z.number() }))
      .query(async ({ input }) => {
        return await getMemoryPostByPostId(input.postId);
      }),

    getUserMemories: publicProcedure
      .input(z.object({ userId: z.number(), limit: z.number().default(20) }))
      .query(async ({ input }) => {
        return await getUserMemories(input.userId, input.limit);
      }),
  }),

  // Reaction routes
  reaction: router({
    add: protectedProcedure
      .input(
        z.object({
          postId: z.number(),
          type: z.enum(["like", "love", "memory"]),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const existing = await getUserReactionOnPost(ctx.user.id, input.postId);
        if (existing) {
          await removeReaction(ctx.user.id, input.postId);
        }
        return await addReaction(ctx.user.id, input.postId, input.type);
      }),

    remove: protectedProcedure
      .input(z.object({ postId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        return await removeReaction(ctx.user.id, input.postId);
      }),

    getPostReactions: publicProcedure
      .input(z.object({ postId: z.number() }))
      .query(async ({ input }) => {
        return await getPostReactions(input.postId);
      }),

    getUserReaction: publicProcedure
      .input(z.object({ userId: z.number(), postId: z.number() }))
      .query(async ({ input }) => {
        return await getUserReactionOnPost(input.userId, input.postId);
      }),
  }),

  // Comment routes
  comment: router({
    add: protectedProcedure
      .input(
        z.object({
          postId: z.number(),
          content: z.string().min(1),
          parentCommentId: z.number().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const result = await addComment(
          ctx.user.id,
          input.postId,
          input.content,
          input.parentCommentId
        );

        // Create notification for post owner
        const post = await getPostById(input.postId);
        if (post && post.userId !== ctx.user.id) {
          await createNotification(
            post.userId,
            ctx.user.id,
            "comment",
            input.postId
          );
        }

        return result;
      }),

    getPostComments: publicProcedure
      .input(z.object({ postId: z.number() }))
      .query(async ({ input }) => {
        return await getPostComments(input.postId);
      }),

    delete: protectedProcedure
      .input(z.object({ commentId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        return await deleteComment(input.commentId);
      }),
  }),

  // Follow routes
  follow: router({
    follow: protectedProcedure
      .input(z.object({ userId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.id === input.userId) {
          throw new Error("Cannot follow yourself");
        }

        await followUser(ctx.user.id, input.userId);

        // Create notification
        await createNotification(input.userId, ctx.user.id, "follow");

        return { success: true };
      }),

    unfollow: protectedProcedure
      .input(z.object({ userId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        return await unfollowUser(ctx.user.id, input.userId);
      }),

    getFollowers: publicProcedure
      .input(z.object({ userId: z.number() }))
      .query(async ({ input }) => {
        return await getFollowers(input.userId);
      }),

    getFollowing: publicProcedure
      .input(z.object({ userId: z.number() }))
      .query(async ({ input }) => {
        return await getFollowing(input.userId);
      }),

    isFollowing: publicProcedure
      .input(z.object({ followerId: z.number(), followingId: z.number() }))
      .query(async ({ input }) => {
        return await isFollowing(input.followerId, input.followingId);
      }),
  }),

  // Notification routes
  notification: router({
    getNotifications: protectedProcedure
      .input(
        z.object({
          limit: z.number().default(20),
          offset: z.number().default(0),
        })
      )
      .query(async ({ ctx, input }) => {
        return await getUserNotifications(ctx.user.id, input.limit, input.offset);
      }),

    markAsRead: protectedProcedure
      .input(z.object({ notificationId: z.number() }))
      .mutation(async ({ input }) => {
        return await markNotificationAsRead(input.notificationId);
      }),

    getUnreadCount: protectedProcedure.query(async ({ ctx }) => {
      return await getUnreadNotificationCount(ctx.user.id);
    }),
  }),

  // Share routes
  share: router({
    share: protectedProcedure
      .input(z.object({ postId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const result = await sharePost(ctx.user.id, input.postId);

        // Create notification
        const post = await getPostById(input.postId);
        if (post && post.userId !== ctx.user.id) {
          await createNotification(post.userId, ctx.user.id, "share", input.postId);
        }

        return result;
      }),

    getPostShares: publicProcedure
      .input(z.object({ postId: z.number() }))
      .query(async ({ input }) => {
        return await getPostShares(input.postId);
      }),
  }),
});

export type AppRouter = typeof appRouter;
