import Navigation from "@/components/Navigation";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Spinner } from "@/components/ui/spinner";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export default function FollowingList() {
  const { isAuthenticated, user: currentUser } = useAuth();
  const [location, navigate] = useLocation();
  const userId = location.split("/")[2];

  const { data: following, isLoading } = trpc.follow.getFollowing.useQuery(
    {
      userId: parseInt(userId || "0"),
    },
    { enabled: !!userId }
  );

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex items-center gap-3">
            <Users className="h-8 w-8 text-accent" />
            <h1 className="text-3xl font-bold text-foreground">Following</h1>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Spinner />
            </div>
          ) : following && following.length > 0 ? (
            <div className="space-y-3">
              {following.map((user: any) => (
                <Card key={user.id} className="card-elevated p-4">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => navigate(`/profile/${user.id}`)}
                      className="flex items-center gap-3 flex-1 text-left hover:opacity-80 transition-opacity"
                    >
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar || undefined} />
                        <AvatarFallback className="bg-accent text-accent-foreground">
                          {user.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">
                          {user.name || "User"}
                        </p>
                        {user.bio && (
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {user.bio}
                          </p>
                        )}
                      </div>
                    </button>
                    {currentUser?.id !== user.id && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/profile/${user.id}`)}
                      >
                        View
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="card-elevated p-12 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">Not following anyone yet</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
