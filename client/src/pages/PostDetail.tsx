import Navigation from "@/components/Navigation";
import { useParams } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Spinner } from "@/components/ui/spinner";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { toast } from "sonner";

export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const { user: currentUser, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [commentText, setCommentText] = useState("");

  const { data: post, isLoading } = trpc.post.getById.useQuery({
    postId: parseInt(postId || "0"),
  });

  const { data: comments, refetch: refetchComments } =
    trpc.comment.getPostComments.useQuery({
      postId: parseInt(postId || "0"),
    });

  const addCommentMutation = trpc.comment.add.useMutation();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex justify-center py-20">
          <Spinner />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container py-20 text-center">
          <p className="text-muted-foreground">Post not found</p>
        </div>
      </div>
    );
  }

  const handleAddComment = async () => {
    if (!commentText.trim()) {
      toast.error("Please write a comment");
      return;
    }

    try {
      await addCommentMutation.mutateAsync({
        postId: post.id,
        content: commentText,
      });
      toast.success("Comment added!");
      setCommentText("");
      refetchComments();
    } catch (error) {
      toast.error("Failed to add comment");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <div className="mx-auto max-w-2xl space-y-8">
          {/* Post */}
          <PostCard post={post} />

          {/* Comments Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Comments</h2>

            {/* Add Comment */}
            <div className="card-elevated p-6">
              <div className="mb-4 flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={currentUser?.avatar || undefined} />
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    {currentUser?.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Add a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="input-elegant resize-none"
                    rows={2}
                  />
                </div>
              </div>
              <Button
                onClick={handleAddComment}
                disabled={addCommentMutation.isPending}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Post Comment
              </Button>
            </div>

            {/* Comments List */}
            {comments && comments.length > 0 ? (
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="card-elevated p-4">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                          U
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">User</p>
                        <p className="text-sm text-foreground">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card-elevated p-8 text-center">
                <p className="text-muted-foreground">No comments yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
