import Navigation from "@/components/Navigation";
import MemoryCard from "@/components/MemoryCard";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Spinner } from "@/components/ui/spinner";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MemoryTimeline() {
  const { isAuthenticated } = useAuth();
  const [location, navigate] = useLocation();
  const userId = location.split("/")[2];
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");

  const { data: memories, isLoading } = trpc.memory.getUserMemories.useQuery(
    {
      userId: parseInt(userId || "0"),
      limit: 50,
    },
    { enabled: !!userId }
  );

  const sortedMemories = memories
    ? [...memories].sort((a, b) => {
        const dateA = new Date(a.memory_posts?.memoryDate || a.posts?.createdAt || 0).getTime();
        const dateB = new Date(b.memory_posts?.memoryDate || b.posts?.createdAt || 0).getTime();
        return sortBy === "newest" ? dateB - dateA : dateA - dateB;
      })
    : [];

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              <Sparkles className="mr-2 inline-block h-8 w-8 text-accent" />
              Memory Timeline
            </h1>
            <p className="mt-2 text-muted-foreground">
              A collection of precious moments
            </p>
            <div className="mt-4 flex gap-2">
              <Button
                variant={sortBy === "newest" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("newest")}
              >
                Newest First
              </Button>
              <Button
                variant={sortBy === "oldest" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("oldest")}
              >
                Oldest First
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Spinner />
            </div>
          ) : memories && sortedMemories.length > 0 ? (
            <div className="space-y-6">
              {sortedMemories.map((memory: any) => (
                <MemoryCard
                  key={memory.memory_posts?.postId || memory.posts?.id}
                  id={memory.id}
                  postId={memory.memory_posts?.postId || memory.posts?.id}
                  memoryDate={memory.memory_posts?.memoryDate || new Date()}
                  story={memory.memory_posts?.story || ""}
                  media={memory.posts?.images || []}
                  author={{
                    id: memory.posts?.userId || 0,
                    name: memory.posts?.user?.name || "User",
                    avatar: memory.posts?.user?.avatar || null,
                  }}
                  createdAt={memory.posts?.createdAt || new Date()}
                  onViewDetails={() =>
                    navigate(`/memory/${memory.memory_posts?.postId || memory.posts?.id}`)
                  }
                />
              ))}
            </div>
          ) : (
            <Card className="card-elevated p-12 text-center">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">
                No memories yet. Start creating your legacy!
              </p>
              <Button
                onClick={() => navigate("/create-memory")}
                className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Create Your First Memory
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
