import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Explore() {
  const { user: currentUser, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: searchResults } = trpc.user.search.useQuery(
    { query: searchQuery, limit: 20 },
    { enabled: searchQuery.length > 0 }
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
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-elegant pl-10"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {searchResults && searchResults.length > 0 ? (
              searchResults.map((user) => (
                <div key={user.id} className="card-elevated p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar || undefined} />
                        <AvatarFallback className="bg-accent text-accent-foreground">
                          {user.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <button
                          onClick={() => navigate(`/profile/${user.id}`)}
                          className="font-semibold text-foreground hover:text-accent"
                        >
                          {user.name}
                        </button>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                        {user.bio && (
                          <p className="mt-1 text-sm text-foreground">
                            {user.bio}
                          </p>
                        )}
                      </div>
                    </div>
                    {currentUser?.id !== user.id && (
                      <Button
                        variant="outline"
                        onClick={() => navigate(`/profile/${user.id}`)}
                      >
                        View
                      </Button>
                    )}
                  </div>
                </div>
              ))
            ) : searchQuery ? (
              <div className="card-elevated p-8 text-center">
                <p className="text-muted-foreground">No users found</p>
              </div>
            ) : (
              <div className="card-elevated p-8 text-center">
                <p className="text-muted-foreground">
                  Search for users to get started
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
