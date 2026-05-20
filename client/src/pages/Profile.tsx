import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useParams } from "wouter";
import { trpc } from "@/lib/trpc";
import { Spinner } from "@/components/ui/spinner";
import { MapPin, Link as LinkIcon, Calendar } from "lucide-react";
import PostCard from "@/components/PostCard";

export default function Profile() {
  const { userId } = useParams<{ userId: string }>();
  const { user: currentUser, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  const { data: profile, isLoading } = trpc.user.getProfile.useQuery({
    userId: parseInt(userId || "0"),
  });

  const { data: userPosts } = trpc.post.getUserPosts.useQuery({
    userId: parseInt(userId || "0"),
    limit: 20,
  });

  const { data: followers, refetch: refetchFollowers } =
    trpc.follow.getFollowers.useQuery({
      userId: parseInt(userId || "0"),
    });

  const { data: following, refetch: refetchFollowing } =
    trpc.follow.getFollowing.useQuery({
      userId: parseInt(userId || "0"),
    });

  const { data: isFollowingUser } = trpc.follow.isFollowing.useQuery({
    followerId: currentUser?.id || 0,
    followingId: parseInt(userId || "0"),
  });

  const followMutation = trpc.follow.follow.useMutation({
    onSuccess: () => {
      refetchFollowers();
      refetchFollowing();
    },
  });
  const unfollowMutation = trpc.follow.unfollow.useMutation({
    onSuccess: () => {
      refetchFollowers();
      refetchFollowing();
    },
  });

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

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container py-20 text-center">
          <p className="text-muted-foreground">User not found</p>
        </div>
      </div>
    );
  }

  const handleFollowToggle = async () => {
    try {
      if (isFollowingUser) {
        await unfollowMutation.mutateAsync({
          userId: profile.id,
        });
      } else {
        await followMutation.mutateAsync({
          userId: profile.id,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        {/* Cover Photo */}
        <div className="mb-8 h-48 rounded-2xl bg-gradient-to-r from-accent/20 to-purple-500/20">
          {profile.coverPhoto && (
            <img
              src={profile.coverPhoto}
              alt="Cover"
              className="h-full w-full rounded-2xl object-cover"
            />
          )}
        </div>

        {/* Profile Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex gap-4">
            <Avatar className="h-24 w-24 -mt-12 border-4 border-background">
              <AvatarImage src={profile.avatar || undefined} />
              <AvatarFallback className="bg-accent text-accent-foreground text-2xl">
                {profile.name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {profile.name}
              </h1>
              <p className="text-muted-foreground">@{profile.email}</p>
              {profile.bio && (
                <p className="mt-2 text-foreground">{profile.bio}</p>
              )}
            </div>
          </div>

          {currentUser?.id !== profile.id && (
            <Button
              onClick={handleFollowToggle}
              disabled={
                followMutation.isPending || unfollowMutation.isPending
              }
              className={
                isFollowingUser
                  ? "bg-accent/20 text-accent hover:bg-accent/30"
                  : "bg-accent text-accent-foreground hover:bg-accent/90"
              }
            >
              {isFollowingUser ? "Following" : "Follow"}
            </Button>
          )}
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <button
            onClick={() => navigate(`/profile/${profile.id}/followers`)}
            className="card-elevated p-4 text-center hover:bg-accent/5 transition-colors"
          >
            <div className="text-2xl font-bold text-foreground">
              {followers?.length || 0}
            </div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </button>
          <button
            onClick={() => navigate(`/profile/${profile.id}/following`)}
            className="card-elevated p-4 text-center hover:bg-accent/5 transition-colors"
          >
            <div className="text-2xl font-bold text-foreground">
              {following?.length || 0}
            </div>
            <div className="text-sm text-muted-foreground">Following</div>
          </button>
          <div className="card-elevated p-4 text-center">
            <div className="text-2xl font-bold text-foreground">
              {userPosts?.length || 0}
            </div>
            <div className="text-sm text-muted-foreground">Posts</div>
          </div>
          <button
            onClick={() => navigate(`/memories/${profile.id}`)}
            className="card-elevated p-4 text-center hover:bg-accent/5 transition-colors"
          >
            <div className="text-2xl font-bold text-foreground">✨</div>
            <div className="text-sm text-muted-foreground">Memories</div>
          </button>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Posts</h2>
          {userPosts && userPosts.length > 0 ? (
            <div className="space-y-6">
              {userPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="card-elevated p-12 text-center">
              <p className="text-muted-foreground">No posts yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
