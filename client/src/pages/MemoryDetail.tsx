import Navigation from "@/components/Navigation";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Spinner } from "@/components/ui/spinner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Sparkles, ArrowLeft } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

export default function MemoryDetail() {
  const { isAuthenticated, user: currentUser } = useAuth();
  const [location, navigate] = useLocation();
  const postId = location.split("/")[2];
  const [commentText, setCommentText] = useState("");

  const { data: post, isLoading } = trpc.post.getById.useQuery(
    { postId: parseInt(postId || "0") },
    { enabled: !!postId }
  );

  const { data: reactions } = trpc.reaction.getPostReactions.useQuery(
    { postId: parseInt(postId || "0") },
    { enabled: !!postId }
  );

  const { data: comments } = trpc.comment.getPostComments.useQuery(
    { postId: parseInt(postId || "0") },
    { enabled: !!postId }
  );

  const addReactionMutation = trpc.reaction.add.useMutation();
  const addCommentMutation = trpc.comment.add.useMutation();

  const handleReaction = (reactionType: "like" | "love" | "memory") => {
    addReactionMutation.mutate(
      { postId: parseInt(postId || "0"), type: reactionType },
      {
        onSuccess: () => {
          trpc.useUtils().reaction.getPostReactions.invalidate();
        },
      }
    );
  };

  const handleComment = () => {
    if (!commentText.trim()) return;
    addCommentMutation.mutate(
      { postId: parseInt(postId || "0"), content: commentText },
      {
        onSuccess: () => {
          setCommentText("");
          trpc.useUtils().comment.getPostComments.invalidate();
        },
      }
    );
  };

  const images = Array.isArray(post?.images)
    ? (post?.images as string[])
    : typeof post?.images === "string"
    ? JSON.parse(post?.images as string)
    : [];

  const userReactions = reactions?.filter((r: any) => r.userId === currentUser?.id) || [];
  const userReactionTypes = userReactions.map((r: any) => r.reactionType);

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <div className="mx-auto max-w-2xl">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.history.back()}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Spinner />
            </div>
          ) : post ? (
            <div className="space-y-6">
              {/* Memory Header */}
              <Card className="card-elevated overflow-hidden border-l-4 border-l-accent">
                <div className="bg-gradient-to-r from-accent/10 to-accent/5 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">
                        Memory
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        A precious moment preserved
                      </p>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="px-6 py-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={(post as any)?.user?.avatar || undefined} />
                        <AvatarFallback className="bg-accent text-accent-foreground">
                          {(post as any)?.user?.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">
                          {(post as any)?.user?.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(post.createdAt), {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-4">
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {post.content}
                  </p>
                </div>

                {/* Images */}
                {images.length > 0 && (
                  <div className="px-6 py-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {images.map((img: string, idx: number) => (
                        <img
                          key={idx}
                          src={String(img)}
                          alt={`Memory ${idx + 1}`}
                          className="h-48 w-full rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Reactions Stats */}
                <div className="border-t border-border px-6 py-3 text-sm text-muted-foreground">
                  <div className="flex gap-4">
                    {reactions && reactions.length > 0 && (
                      <span>{reactions.length} reactions</span>
                    )}
                    {comments && comments.length > 0 && (
                      <span>{comments.length} comments</span>
                    )}
                  </div>
                </div>

                {/* Memory Reactions */}
                <div className="border-t border-border px-6 py-4">
                  <p className="mb-3 text-sm font-semibold text-foreground">
                    How does this memory make you feel?
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant={
                        userReactionTypes.includes("like") ? "default" : "outline"
                      }
                      size="sm"
                      className="gap-2"
                      onClick={() => handleReaction("like")}
                    >
                      <Heart className="h-4 w-4" />
                      Like
                    </Button>
                    <Button
                      variant={
                        userReactionTypes.includes("love") ? "default" : "outline"
                      }
                      size="sm"
                      className="gap-2"
                      onClick={() => handleReaction("love")}
                    >
                      <Heart className="h-4 w-4 fill-current" />
                      Love
                    </Button>
                    <Button
                      variant={
                        userReactionTypes.includes("memory") ? "default" : "outline"
                      }
                      size="sm"
                      className="gap-2"
                      onClick={() => handleReaction("memory")}
                    >
                      <Sparkles className="h-4 w-4" />
                      Memory
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Comments Section */}
              <Card className="card-elevated p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Comments
                </h3>

                {/* Add Comment */}
                <div className="mb-6 space-y-2">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share your thoughts about this memory..."
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    rows={3}
                  />
                  <Button
                    onClick={handleComment}
                    disabled={!commentText.trim()}
                    className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Post Comment
                  </Button>
                </div>

                {/* Comments List */}
                {comments && comments.length > 0 ? (
                  <div className="space-y-4">
                    {comments.map((comment: any) => (
                      <div key={comment.id} className="border-b border-border pb-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={comment.user?.avatar || undefined} />
                            <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                              {comment.user?.name?.charAt(0).toUpperCase() || "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {comment.user?.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {formatDistanceToNow(new Date(comment.createdAt), {
                                addSuffix: true,
                              })}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-foreground">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">
                    No comments yet. Be the first to share your thoughts!
                  </p>
                )}
              </Card>
            </div>
          ) : (
            <Card className="card-elevated p-12 text-center">
              <p className="text-muted-foreground">Memory not found</p>
              <Button onClick={() => window.history.back()} className="mt-4">
                Go Back
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
