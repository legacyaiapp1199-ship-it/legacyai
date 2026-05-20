import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Image, Sparkles } from "lucide-react";
import PostCard from "@/components/PostCard";
import { Spinner } from "@/components/ui/spinner";
import { useLocation } from "wouter";

export default function Feed() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const createPostMutation = trpc.post.create.useMutation();
  const { data: feedPosts, isLoading, refetch } = trpc.post.getFeed.useQuery(
    {
      limit: 20,
      offset: 0,
    },
    { enabled: isAuthenticated }
  );

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages([...images, ...files]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews((prev) => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

  const handleCreatePost = async () => {
    if (!content.trim()) {
      toast.error("Please write something");
      return;
    }

    try {
      // Upload images to S3
      const uploadedImages = [];
      for (const preview of imagePreviews) {
        try {
          // Convert base64 to blob
          const response = await fetch(preview);
          const blob = await response.blob();
          const buffer = await blob.arrayBuffer();
          // In production, upload to S3 via server
          // For now, use the preview URL
          uploadedImages.push(preview);
        } catch (error) {
          console.error("Failed to upload image", error);
        }
      }

      await createPostMutation.mutateAsync({
        content,
        images: uploadedImages,
      });

      toast.success("Post created!");
      setContent("");
      setImages([]);
      setImagePreviews([]);
      refetch();
    } catch (error) {
      toast.error("Failed to create post");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Feed */}
          <div className="space-y-6 lg:col-span-2">
            {/* Create Post */}
            <div className="card-elevated p-6">
              <div className="mb-4 flex gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user?.avatar || undefined} />
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Share your memory or moment..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="input-elegant resize-none"
                    rows={3}
                  />
                </div>
              </div>

              {/* Image Previews */}
              {imagePreviews.length > 0 && (
                <div className="mb-4 grid gap-2 sm:grid-cols-2">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-32 w-full rounded-lg object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <label className="flex-1">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="feed-image-input"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        (document.getElementById('feed-image-input') as HTMLInputElement)?.click()
                      }
                  >
                    <Image className="mr-2 h-4 w-4" />
                    Add Photos
                  </Button>
                </label>
                <Button
                  onClick={() => navigate("/create-memory")}
                  variant="outline"
                  className="flex-1"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Memory
                </Button>
                <Button
                  onClick={handleCreatePost}
                  disabled={createPostMutation.isPending}
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {createPostMutation.isPending ? (
                    <>
                      <Spinner className="mr-2 h-4 w-4" />
                      Posting...
                    </>
                  ) : (
                    <>Post</>
                  )}
                </Button>
              </div>
            </div>

            {/* Posts */}
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Spinner />
              </div>
            ) : feedPosts && feedPosts.length > 0 ? (
              <div className="space-y-6">
            {feedPosts.map((post) => {
              // Fetch user data for each post
              return (
                <PostCard
                  key={post.id}
                  post={post}
                  onDelete={() => refetch()}
                />
              );
            })}
              </div>
            ) : (
              <div className="card-elevated p-12 text-center">
                <p className="text-muted-foreground">
                  No posts yet. Start by creating one!
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="card-elevated p-6">
              <h3 className="mb-4 font-semibold text-foreground">
                Your Profile
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Posts</span>
                  <span className="font-semibold text-foreground">
                    {feedPosts?.length || 0}
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full"
                onClick={() => navigate(`/profile/${user?.id}`)}
              >
                View Profile
              </Button>
            </div>

            {/* Suggested Users */}
            <div className="card-elevated p-6">
              <h3 className="mb-4 font-semibold text-foreground">
                Discover People
              </h3>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/explore")}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
