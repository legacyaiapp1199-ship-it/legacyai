import { Post } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Trash2 } from "lucide-react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";

interface PostCardProps {
  post: Post & { user?: any };
  onDelete?: () => void;
}

export default function PostCard({ post, onDelete }: PostCardProps) {
  const [, navigate] = useLocation();
  const { user: currentUser } = useAuth();
  const [reactionType, setReactionType] = useState<
    "like" | "love" | "memory" | null
  >(null);

  const { data: reactions } = trpc.reaction.getPostReactions.useQuery({
    postId: post.id,
  });

  const { data: userReaction } = trpc.reaction.getUserReaction.useQuery(
    {
      userId: currentUser?.id || 0,
      postId: post.id,
    },
    { enabled: !!currentUser?.id }
  );

  const { data: author } = trpc.user.getProfile.useQuery(
    { userId: post.userId },
    { enabled: !post.user }
  );

  const addReactionMutation = trpc.reaction.add.useMutation();
  const removeReactionMutation = trpc.reaction.remove.useMutation();
  const deletePostMutation = trpc.post.delete.useMutation();

  const handleReaction = async (type: "like" | "love" | "memory") => {
    try {
      if (userReaction?.type === type) {
        await removeReactionMutation.mutateAsync({ postId: post.id });
        setReactionType(null);
      } else {
        await addReactionMutation.mutateAsync({ postId: post.id, type });
        setReactionType(type);
      }
    } catch (error) {
      toast.error("Failed to update reaction");
    }
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePostMutation.mutateAsync({ postId: post.id });
        toast.success("Post deleted");
        onDelete?.();
      } catch (error) {
        toast.error("Failed to delete post");
      }
    }
  };

  const likeCount = reactions?.filter((r) => r.type === "like").length || 0;
  const loveCount = reactions?.filter((r) => r.type === "love").length || 0;
  const memoryCount =
    reactions?.filter((r) => r.type === "memory").length || 0;

  const images = post.images
    ? typeof post.images === "string"
      ? JSON.parse(post.images)
      : Array.isArray(post.images)
      ? post.images
      : []
    : [];

  const postUser = post.user || author;

  return (
    <div className="card-elevated p-4 sm:p-6">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={postUser?.avatar || undefined} />
            <AvatarFallback className="bg-accent text-accent-foreground">
              {postUser?.name?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
          <button
            onClick={() => navigate(`/profile/${post.userId}`)}
            className="font-semibold text-foreground hover:text-accent"
          >
            {postUser?.name || "User"}
          </button>
          <p className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(post.createdAt), {
              addSuffix: true,
            })}
          </p>
          </div>
        </div>

        {currentUser?.id === post.userId && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            className="text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Content */}
      <p className="mb-4 text-foreground">{post.content}</p>

      {/* Images */}
      {images.length > 0 && (
        <div className="mb-4 grid gap-2 sm:grid-cols-2">
          {images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt="Post"
              className="h-48 w-full rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      {/* Reactions Summary */}
      {(likeCount > 0 || loveCount > 0 || memoryCount > 0) && (
        <div className="mb-4 flex gap-2 text-sm text-muted-foreground">
          {likeCount > 0 && <span>👍 {likeCount}</span>}
          {loveCount > 0 && <span>❤️ {loveCount}</span>}
          {memoryCount > 0 && <span>✨ {memoryCount}</span>}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 border-t border-border pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleReaction("like")}
          className={`flex-1 ${
            userReaction?.type === "like" ? "text-accent" : ""
          }`}
        >
          <Heart
            className={`mr-2 h-4 w-4 ${
              userReaction?.type === "like" ? "fill-current" : ""
            }`}
          />
          Like
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(`/post/${post.id}`)}
          className="flex-1"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Comment
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleReaction("love")}
          className={`flex-1 ${
            userReaction?.type === "love" ? "text-red-500" : ""
          }`}
        >
          <Heart
            className={`mr-2 h-4 w-4 ${
              userReaction?.type === "love" ? "fill-current" : ""
            }`}
          />
          Love
        </Button>
      </div>
    </div>
  );
}
