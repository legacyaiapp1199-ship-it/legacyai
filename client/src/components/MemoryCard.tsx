import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Sparkles } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface MemoryCardProps {
  id: number;
  postId: number;
  memoryDate: Date;
  story: string;
  media: unknown;
  author: {
    id: number;
    name: string | null;
    avatar: string | null;
  };
  createdAt: Date;
  likeCount?: number;
  commentCount?: number;
  shareCount?: number;
  isLiked?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onViewDetails?: () => void;
}

export default function MemoryCard({
  memoryDate,
  story,
  media,
  author,
  createdAt,
  likeCount = 0,
  commentCount = 0,
  shareCount = 0,
  isLiked = false,
  onLike,
  onComment,
  onShare,
  onViewDetails,
}: MemoryCardProps) {
  const images = Array.isArray(media)
    ? (media as string[])
    : typeof media === "string"
    ? JSON.parse(media as string)
    : [];

  return (
    <Card className="card-elevated overflow-hidden border-l-4 border-l-accent hover:shadow-lg transition-shadow">
      {/* Header with memory date */}
      <div className="bg-gradient-to-r from-accent/10 to-accent/5 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm font-semibold text-muted-foreground">
                Memory from
              </p>
              <p className="text-lg font-bold text-foreground">
                {new Date(memoryDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>

      {/* Author info */}
      <div className="px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatar || undefined} />
            <AvatarFallback className="bg-accent text-accent-foreground">
              {author.name?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{author.name}</p>
            <p className="text-xs text-muted-foreground">Shared a memory</p>
          </div>
        </div>
      </div>

      {/* Story content */}
      <div className="px-6 py-4">
        <p className="text-foreground leading-relaxed whitespace-pre-wrap">
          {story}
        </p>
      </div>

      {/* Media gallery */}
      {images.length > 0 && (
        <div className="px-6 py-4">
          <div className="grid gap-2 sm:grid-cols-2">
            {images.map((img: string, idx: number) => (
              <img
                key={idx}
                src={String(img)}
                alt={`Memory ${idx + 1}`}
                className="h-40 w-full rounded-lg object-cover hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="border-t border-border px-6 py-4">
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex gap-4">
            {likeCount > 0 && <span>{likeCount} likes</span>}
            {commentCount > 0 && <span>{commentCount} comments</span>}
            {shareCount > 0 && <span>{shareCount} shares</span>}
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className={`flex-1 gap-2 ${
              isLiked ? "text-accent" : "text-muted-foreground"
            }`}
            onClick={onLike}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            Like
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 gap-2 text-muted-foreground"
            onClick={onComment}
          >
            <MessageCircle className="h-4 w-4" />
            Comment
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 gap-2 text-muted-foreground"
            onClick={onShare}
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onViewDetails}
          >
            View
          </Button>
        </div>
      </div>
    </Card>
  );
}
